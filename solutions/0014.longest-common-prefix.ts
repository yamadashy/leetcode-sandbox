function longestCommonPrefix(strs: string[]): string {
  const strsLength = strs.length;

  const firstStr = strs[0];
  let sameCount = -1;

  if (strsLength === 0) {
    return '';
  }

  if (strsLength === 1) {
    return firstStr;
  }

  loop: for (let i = 0; i < firstStr.length; i++) {
    for (let j = 1; j < strsLength; j++) {
      const str = strs[j];

      if (firstStr[i] !== str[i]) {
        sameCount = i;
        break loop;
      }
    }
  }

  if (sameCount === -1) {
    sameCount = firstStr.length;
  }

  return firstStr.slice(0, sameCount);
}

export {};
