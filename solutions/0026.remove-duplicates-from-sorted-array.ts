function removeDuplicates(nums: number[]): number {
  let prevValue = null;

  for (let i = 0; i < nums.length; ) {
    const currentValue = nums[i];

    if (prevValue === currentValue) {
      nums.splice(i, 1);
    } else {
      i++;
    }

    prevValue = currentValue;
  }

  return nums.length;
}
