function isValid(text: string): boolean {
  const parenEndStartPairMap: { [key: string]: string } = {
    ')': '(',
    '}': '{',
    ']': '[',
  };
  const startParens = Object.values(parenEndStartPairMap);
  const endParens = Object.keys(parenEndStartPairMap);

  const parenStack: string[] = [];
  const textLength = text.length;

  for (let i = 0; i < textLength; i++) {
    const textChar = text[i];
    const isStartParen = startParens.includes(textChar);
    const isEndParen = endParens.includes(textChar);

    if (isStartParen) {
      parenStack.push(textChar);
      continue;
    }

    if (endParens.includes(textChar)) {
      const lastStackedParen = parenStack[parenStack.length - 1] || null;

      if (lastStackedParen !== null) {
        if (parenEndStartPairMap[textChar] === lastStackedParen) {
          parenStack.pop();
        } else {
          return false;
        }
      } else {
        return false;
      }
    }
  }

  if (parenStack.length > 0) {
    return false;
  }

  return true;
}
