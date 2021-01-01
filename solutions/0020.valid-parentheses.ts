function isValid(text: string): boolean {
  const parenPairMap = {
    '(': ')',
    '{': '}',
    '[': ']',
  };

  const parenStack: string[] = [];
  const textLength = text.length;

  for (let i = 0; i < textLength; i++) {
    // TODO: キーにスタックに積んでいく。キーになかったらスタックから取る
  }

  return true;
}

export {};
