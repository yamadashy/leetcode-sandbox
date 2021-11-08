// https://leetcode.com/problems/valid-palindrome
function isPalindrome(s: string): boolean {
    const sLen = s.length;
    const charList = [];

    for (let i = 0; i < sLen; i++) {
        if (/[a-zA-Z0-9]/.test(s[i])) {
            charList.push(s[i].toLowerCase());
        }
    }

    const charListLen = charList.length;
    const charListHarlfLen = Math.ceil(charListLen / 2);
    let isPalindrome = true;

    for (let i = 0; i < charListHarlfLen; i++) {
        if (charList[i] !== charList[charListLen - 1 - i]) {
            isPalindrome = false;
        }
    }

    return isPalindrome;
}

export {};
