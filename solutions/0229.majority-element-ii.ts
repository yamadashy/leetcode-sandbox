// https://leetcode.com/problems/majority-element-ii
function majorityElement(nums: number[]): number[] {
    const countMap: number[] = [];

    nums.forEach((val) => {
        if (!countMap[val]) {
            countMap[val] = 0;
        }
        countMap[val]++;
    });

    const indexes: number[] = [];
    const threshold = nums.length / 3;

    for (const index in countMap) {
        const count = countMap[index];
        if (threshold < count) {
            indexes.push(parseInt(index));
        }
    }

    return indexes;
}

export {};
