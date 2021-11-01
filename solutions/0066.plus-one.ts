// https://leetcode.com/problems/plus-one
function plusOne(digits: number[]): number[] {
  const last = digits.slice(-1)[0];

  for (let i = digits.length - 1; i > -1; i--) {
    const num = digits[i];

    if (num === 9) {
      digits[i] = 0;

      if (i === 0) {
        digits.unshift(1);
      }
    } else {
      digits[i]++;
      break;
    }
  }

  return digits;
}
