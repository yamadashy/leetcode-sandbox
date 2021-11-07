// https://leetcode.com/problems/pascals-triangle-ii
function getRow(rowIndex: number): number[] {
    let nums: number[] = [1];

    for (let i = 1; i < rowIndex + 1; i++) {
        const numsLength = nums.length;
        const nextNums: number[] = [1];

        for (let j = 0; j < numsLength - 1; j++) {
            const num = nums[j] + nums[j + 1];
            nextNums.push(num);
        }

        nextNums.push(1);
        nums = nextNums;
    }

    return nums;
}
