function isPalindrome(x: number): boolean {
    if (x < 0) {
        return false;
    }

    const xText = x.toString();
    const xTextLength = xText.length;
    const xTextHalfLength = Math.floor(xTextLength / 2);

    for (let i = 0; i < xTextHalfLength; i++) {
        if (xText[i] !== xText[xTextLength - 1 - i]) {
            return false;
        }
    }

    return true;
}
