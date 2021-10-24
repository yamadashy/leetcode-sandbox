// https://leetcode.com/problems/maximum-subarray
function maxSubArray(nums: number[]): number {
  const numsLength = nums.length;
  let maxSum = nums[0];
  let tmpSum = nums[0];

  for (let i = 1; i < numsLength; i++) {
    tmpSum = Math.max(tmpSum + nums[i], nums[i]);

    if (maxSum < tmpSum) {
      maxSum = tmpSum;
    }
  }

  return maxSum;
}
