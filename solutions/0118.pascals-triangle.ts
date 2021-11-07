// https://leetcode.com/problems/pascals-triangle
function generate(numRows: number): number[][] {
    const numsArray: number[][] = [[1]];
    let nums: number[] = [1];

    for (let i = 1; i < numRows; i++) {
        const numsLength = nums.length;
        const nextNums: number[] = [1];

        for (let j = 0; j < numsLength - 1; j++) {
            const num = nums[j] + nums[j + 1];
            nextNums.push(num);
        }

        nextNums.push(1);
        numsArray.push(nextNums);
        nums = nextNums;
    }

    return numsArray;
}
