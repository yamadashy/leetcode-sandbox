function twoSum(nums: number[], target: number): number[] {
  const numsLength = nums.length;
  let resultI = 0;
  let resultJ = 0;

  for (let i = 0; i < numsLength; i++) {
    for (let j = i + 1; j < numsLength; j++) {
      if (nums[i] + nums[j] === target) {
        resultI = i;
        resultJ = j;
        break;
      }
    }
  }

  return [resultI, resultJ];
}
