function strStr(haystack: string, needle: string): number {
  let searchIndex = -1;
  const haystackLength = haystack.length;
  const needleLength = needle.length;

  if (needleLength === 0) {
    return 0;
  }

  loop: for (let i = 0; i < haystackLength; i++) {
    for (let j = 0; j < needleLength; j++) {
      if (haystack[i + j] !== needle[j]) {
        break;
      }

      if (j === needleLength - 1) {
        searchIndex = i;
        break loop;
      }
    }
  }

  return searchIndex;
}

export {};
