// https://leetcode.com/problems/excel-sheet-column-title
function convertToTitle(columnNumber: number): string {
    const charCodeA = 'A'.charCodeAt(0);
    let title = '';

    while (true) {
        const mod = columnNumber % 26;
        columnNumber = (columnNumber - mod) / 26;

        let charCode = charCodeA + mod - 1;

        if (mod === 0) {
            charCode = charCodeA + 25;
            columnNumber -= 1;
        }

        title = String.fromCharCode(charCode) + title;

        if (columnNumber === 0) {
            break;
        }
    }

    return title;
};

export {};
