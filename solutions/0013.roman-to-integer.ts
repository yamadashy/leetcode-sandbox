function romanToInt(romanNumberText: string): number {
  /**
   * Symbol       Value
   * I             1
   * V             5
   * X             10
   * L             50
   * C             100
   * D             500
   * M             1000
   */
  const replaced = romanNumberText
    .replace('MMM', '[3000]')
    .replace('MM', '[2000]')
    .replace('CM', '[900]')
    .replace('M', '[1000]')
    .replace('CD', '[400]')
    .replace('D', '[500]')
    .replace('CCC', '[300]')
    .replace('CC', '[200]')
    .replace('XC', '[90]')
    .replace('C', '[100]')
    .replace('XL', '[40]')
    .replace('L', '[50]')
    .replace('XXX', '[30]')
    .replace('XX', '[20]')
    .replace('IX', '[9]')
    .replace('X', '[10]')
    .replace('IV', '[4]')
    .replace('V', '[5]')
    .replace('III', '[3]')
    .replace('II', '[2]')
    .replace('I', '[1]')

  const strNumbers: string[] = replaced.slice(1, replaced.length -1).split('][');
  let sum = 0;

  for (let strNumber of strNumbers) {
     sum += parseInt(strNumber);
  }

  return sum;
}
