// https://leetcode.com/problems/best-time-to-buy-and-sell-stock
function maxProfit(prices: number[]): number {
    let minPrice = Infinity;
    let maxDiff = 0;
    const pricesLength = prices.length;

    for (let i = 0; i < pricesLength; i++) {
        const diff = prices[i] - minPrice;

        if (prices[i] < minPrice) {
            minPrice = prices[i];
        }

        if (maxDiff < diff) {
            maxDiff = diff;
        }
    }

    return maxDiff;
}

export {};
