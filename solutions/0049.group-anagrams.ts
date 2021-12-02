// https://leetcode.com/problems/group-anagrams
function groupAnagrams(strs: string[]): string[][] {
    const map: { [key: string]: string[] } = {};

    for (const str of strs) {
        const sortedStr = str.split('').sort().join();

        if (!map[sortedStr]) {
            map[sortedStr] = [];
        }

        map[sortedStr].push(str);
    }

    return Object.values(map);
}

export {};
