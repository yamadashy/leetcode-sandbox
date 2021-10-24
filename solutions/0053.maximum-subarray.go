// https://leetcode.com/problems/maximum-subarray
func maxSubArray(nums []int) int {
	var numsLength int = len(nums)
	var maxSum int = -10000

	for i := 0; i < numsLength; i++ {
		var tmpSum int = 0

		for j := i; j < numsLength; j++ {
			tmpSum += nums[j]

			if maxSum < tmpSum {
				maxSum = tmpSum
			}
		}
	}

	return maxSum
}
