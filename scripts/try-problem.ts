import axios from 'axios';
import * as fs from 'fs';
import * as path from 'path';

interface StatStatusPair {
  stat: {
    question_id: number;
    question__title: string;
    question__title_slug: string;
  };
  difficulty: {
    level: number;
  };
  paid_only: boolean;
}

const scriptArgs = process.argv.slice(2);
const problemId: number | null = scriptArgs[0] ? parseInt(scriptArgs[0]) : null;

if (problemId === null) {
  throw new Error('Problem id is empty');
}

axios.get('https://leetcode.com/api/problems/all/').then((response) => {
  const algorithms = response.data;
  const statStatusPairs: StatStatusPair[] = algorithms.stat_status_pairs;

  let targetStatStatusPair: StatStatusPair | null = null;

  // Search
  for (const statStatusPair of statStatusPairs) {
    if (statStatusPair.stat.question_id === problemId) {
      targetStatStatusPair = statStatusPair;
    }
  }

  // Not found
  if (targetStatStatusPair === null) {
    throw new Error(`Not found problem. id: ${problemId}`);
  }

  // TODO: Get problem code snippet with selenium

  // Create TS file
  const tsFileNameProblemId = ('000' + problemId).slice(-4);
  const tsFileProblemNameSlug = targetStatStatusPair.stat.question__title_slug;
  const tsFileName = `${tsFileNameProblemId}.${tsFileProblemNameSlug}.ts`;
  const tsFilePath = path.resolve(__dirname, '../solutions/', tsFileName);
  const isFileExist = fs.existsSync(tsFilePath);

  if (!isFileExist) {
    fs.writeFile(tsFilePath, '', (err) => {
      if (err) {
        throw err;
      }

      console.info(`
        Created TypeScript file
        - ProblemId: ${problemId}
        - ProblemTitle: ${targetStatStatusPair.stat.question__title}
        - ProblemTitleSlug: ${tsFileProblemNameSlug}
        - DifficultyLevel: ${targetStatStatusPair.difficulty.level}
        - FileName: ${tsFileName}
        - FilePath: ${tsFilePath}
      `);
    });
  } else {
    throw new Error(`File already exist. fileName: ${tsFileName}`);
  }
});
