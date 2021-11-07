// https://leetcode.com/problems/merge-sorted-array
/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    const nums1Count = 0;
    let nums2Index = 0;
    const nums1Length = nums1.length;

    for (let i = 0; i < nums1Length; i++) {
        while (true) {
            if (nums1[i] >= nums2[nums2Index]) {
                nums1.splice(i, 0, nums2[nums2Index]);
                nums1.length = nums1Length;
                i++;
                nums2Index++;
            } else {
                nums1.splice(i, 1, nums2[nums2Index]);
                i++;
                nums2Index++;
                break;
            }
        }
    }
}
