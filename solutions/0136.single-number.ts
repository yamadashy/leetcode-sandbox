// https://leetcode.com/problems/single-number
function singleNumber(nums: number[]): number {
    const numAppearMap: boolean[] = [];

    for (const num of nums) {
        if (numAppearMap[num] === true) {
            delete numAppearMap[num];
        } else {
            numAppearMap[num] = true;
        }
    }

    return parseInt(Object.keys(numAppearMap)[0]);
}

export {};
