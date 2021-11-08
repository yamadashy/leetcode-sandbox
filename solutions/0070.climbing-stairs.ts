// https://leetcode.com/problems/climbing-stairs
const resultMap: number[] = [];

function climbStairs(n: number): number {
    return re(n);
}

function re(n: number): number {
    if (n <= 2) {
        return n;
    }

    if (resultMap[n]) {
        return resultMap[n];
    }

    const result = re(n - 2) + re(n - 1);

    resultMap[n] = result;

    return result;
}

export {};
