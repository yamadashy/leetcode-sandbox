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
interface CodeSnippet {
  lang: string;
  langSlug: string;
  code: string;
  __typename: string;
}

const scriptArgs = process.argv.slice(2);
const problemId: number | null = scriptArgs[0] ? parseInt(scriptArgs[0]) : null;

if (problemId === null) {
  throw new Error('Problem id is empty');
}

class LeetCodeApi {
  static fetchProblemsAll() {
    return axios.get('https://leetcode.com/api/problems/all/')
  }

  static fetchProblem(titleSlag: string) {
    const requestParams = {
      operationName: 'questionData',
      variables: {
        titleSlug: titleSlag,
      },
      query: `query questionData($titleSlug: String!) {
        question(titleSlug: $titleSlug) {
          codeSnippets {
              lang
              langSlug
              code
              __typename
          }
          __typename
        }
      }`,
    };

    return axios.post('https://leetcode.com/graphql', requestParams);
  }
}

LeetCodeApi.fetchProblemsAll().then((response) => {
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

  // Create TS file
  const questionTitleSlag = targetStatStatusPair.stat.question__title_slug;
  const tsFileNameProblemId = ('000' + problemId).slice(-4);
  const tsFileName = `${tsFileNameProblemId}.${questionTitleSlag}.ts`;
  const tsFilePath = path.resolve(__dirname, '../solutions/', tsFileName);
  const isFileExist = fs.existsSync(tsFilePath);

  LeetCodeApi.fetchProblem(questionTitleSlag).then((res) => {
    const codeSnippets: CodeSnippet[] = res.data.data.question.codeSnippets;
    const snippetForTypeScript = codeSnippets[14].code;
    const tsFileTemplate = `// https://leetcode.com/problems/${questionTitleSlag}\n${snippetForTypeScript}\n`;

    if (!isFileExist) {
      fs.writeFile(tsFilePath, tsFileTemplate, (err) => {
        if (err) {
          throw err;
        }

        console.info(`
          Created TypeScript file
          - ProblemId: ${problemId}
          - ProblemTitle: ${targetStatStatusPair.stat.question__title}
          - ProblemTitleSlug: ${questionTitleSlag}
          - DifficultyLevel: ${targetStatStatusPair.difficulty.level}
          - FileName: ${tsFileName}
          - FilePath: ${tsFilePath}
        `);
      });
    } else {
      console.error(`File already exist. fileName: ${tsFileName}`);
      process.exit(1);
    }
  });
});
