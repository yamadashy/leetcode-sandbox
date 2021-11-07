// https://leetcode.com/problems/add-binary
function addBinary(a: string, b: string): string {
    const aLen = a.length;
    const bLen = b.length;
    const maxLen = Math.max(aLen, bLen);
    let carryVal = 0;
    const resultArray = [];

    for (let i = 0; i < maxLen; i++) {
        const aIndex = aLen - 1 - i;
        const bIndex = bLen - 1 - i;
        let aVal = 0;
        let bVal = 0;
        let sumVal = 0;

        if (aIndex > -1) {
            aVal = parseInt(a[aIndex]);
        }

        if (bIndex > -1) {
            bVal = parseInt(b[bIndex]);
        }

        sumVal = aVal + bVal + carryVal;

        if (sumVal >= 2) {
            carryVal = 1;
        } else {
            carryVal = 0;
        }

        sumVal %= 2;

        resultArray.unshift(sumVal);
    }

    if (carryVal === 1) {
        resultArray.unshift(1);
    }

    return resultArray.join('');
}
