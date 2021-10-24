function removeElement(nums: number[], val: number): number {
  for (let i = 0; i < nums.length; ) {
    const currentValue = nums[i];

    if (val === currentValue) {
      nums.splice(i, 1);
    } else {
      i++;
    }
  }

  return nums.length;
}
