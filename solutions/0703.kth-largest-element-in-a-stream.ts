// https://leetcode.com/problems/kth-largest-element-in-a-stream
class KthLargest {
    private k: number;
    private sortedNums: number[] = [];

    constructor(k: number, nums: number[]) {
        this.k = k;
        this.sortedNums = nums.sort((a, b) => b - a);
    }

    add(val: number): number {
        this.sortedNums.push(val);
        // this.sortedNums.sort(sortFunction);
        this.insertToSortedNums(val);
        return this.sortedNums[this.k - 1];
    }

    private insertToSortedNums(val: number) {
        const arrayLength = this.sortedNums.length;

        for (let i = 0; i < arrayLength; i++) {
            if (this.sortedNums[i] <= val) {
                this.sortedNums.splice(i, 0, val);
                this.sortedNums.length = this.k;
                return;
            }
        }

        this.sortedNums.push(val);
        this.sortedNums.length = this.k;
    }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

export {};
