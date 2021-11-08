function reverse(x: number): number {
    const isPositive = x >= 0;
    const absX = Math.abs(x);
    const reversedNum = (isPositive ? 1 : -1) * parseInt(absX.toString().split('').reverse().join(''));

    return -Math.pow(2, 31) <= reversedNum && reversedNum <= Math.pow(2, 31) - 1 ? reversedNum : 0;
}

export {};
