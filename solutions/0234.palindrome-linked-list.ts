/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function isPalindrome(head: ListNode | null): boolean {
    const numbers = [];
    let current = head;

    while (current !== null) {
        numbers.push(current.val);
        current = current.next;
    }

    const numbersLength = numbers.length;
    const numbersHalfLength = Math.floor(numbersLength / 2);

    for (let i = 0; i < numbersLength; i++) {
        if (numbers[i] !== numbers[numbersLength - 1 - i]) {
            return false;
        }
    }

    return true;
}

export {};
