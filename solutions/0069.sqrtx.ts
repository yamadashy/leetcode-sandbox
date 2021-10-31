// https://leetcode.com/problems/sqrtx
function mySqrt(x: number): number {
  if (x === 0) {
    return 0;
  }

  let tmp = x;

  while (true) {
    tmp = Math.floor(tmp / 2);

    if (tmp * tmp < x) {
      break;
    }
  }

  while (true) {
    if ((tmp + 1) * (tmp + 1) > x) {
      break;
    }

    tmp++;
  }

  return tmp;
};
