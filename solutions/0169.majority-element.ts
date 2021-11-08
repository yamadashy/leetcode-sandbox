// https://leetcode.com/problems/majority-element
function majorityElement(nums: number[]): number {
    const countMap: number[] = [];

    nums.forEach((val) => {
        if (!countMap[val]) {
            countMap[val] = 0;
        }
        countMap[val]++;
    });

    let max = 0;
    let maxIndex = -1;

    for (const index in countMap) {
        const count = countMap[index];
        if (max < count) {
            max = count;
            maxIndex = parseInt(index);
        }
    }

    return maxIndex;
};

export {};
