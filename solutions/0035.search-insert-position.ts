// https://leetcode.com/problems/search-insert-position
function searchInsert(nums: number[], target: number): number {
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (target <= num) {
      return i;
    }
  }

  return nums.length;
}
