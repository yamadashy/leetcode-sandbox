// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted
function twoSum(numbers: number[], target: number): number[] {
    const numsLength = numbers.length;
    let resultI = 0;
    let resultJ = 0;

    const numIndexMap = [];

    for (let i = 0; i < numsLength; i++) {
        numIndexMap[numbers[i]] = i;
    }

    for (let i = 0; i < numsLength; i++) {
        const findNum = target - numbers[i];

        if (numIndexMap[findNum] !== undefined) {
            resultI = i;
            resultJ = numIndexMap[findNum];
            break;
        }
    }

    return [resultI + 1, resultJ + 1];
}

export {};
