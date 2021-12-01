// https://leetcode.com/problems/top-k-frequent-elements
function topKFrequent(nums: number[], k: number): number[] {
    const numFreMap: { [key: number]: number } = {};

    for (const num of nums) {
        if (!numFreMap[num]) {
            numFreMap[num] = 0;
        }
        numFreMap[num]++;
    }

    const freDataList: { fre: number; num: number }[] = [];

    for (const num in numFreMap) {
        freDataList.push({
            num: parseInt(num),
            fre: numFreMap[num],
        });
    }

    freDataList.sort((a, b) => {
        return b.fre - a.fre;
    });

    const results: number[] = [];

    for (let i = 0; i < k; i++) {
        results.push(freDataList[i].num);
    }

    return results;
}

export {};
