// https://leetcode.com/problems/find-k-pairs-with-smallest-sums
function kSmallestPairs(nums1: number[], nums2: number[], k: number): number[][] {
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);
    const len1 = Math.min(nums1.length, k);
    const len2 = Math.min(nums2.length, k);

    const tmpPairs = [];

    for (let i = 0; i < len1; i++) {
        for (let j = 0; j < len2; j++) {
            tmpPairs.push([nums1[i], nums2[j]]);
        }
    }

    tmpPairs.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));

    return tmpPairs.slice(0, k);
}

export {};
