// https://leetcode.com/problems/add-two-numbers
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

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let currentL1 = l1;
    let currentL2 = l2;
    const rootNode = new ListNode(null);
    let currentNode = rootNode;

    let carryValue = 0;

    const isL1 = false;

    while (true) {
        if (currentL1 === null && currentL2 === null) {
            if (carryValue > 0) {
                currentNode.next = new ListNode(carryValue);
            }
            break;
        }

        const l1Val = currentL1 ? currentL1.val : 0;
        const l2Val = currentL2 ? currentL2.val : 0;
        const sumVal = l1Val + l2Val + carryValue;
        currentNode.val = sumVal % 10;

        if (currentL1) {
            currentL1 = currentL1.next;
        }

        if (currentL2) {
            currentL2 = currentL2.next;
        }

        if (currentL1 || currentL2) {
            currentNode = currentNode.next = new ListNode(null);
        }

        carryValue = Math.floor(sumVal / 10);
    }

    return rootNode;
}

export {};
