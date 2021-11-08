// https://leetcode.com/problems/intersection-of-two-linked-lists
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

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    let currentA: ListNode = headA;
    let currentB: ListNode = headB;

    while (true) {
        if (currentA === null) {
            break;
        }

        currentB = headB;

        while (true) {
            if (currentB === null) {
                break;
            }

            if (currentA === currentB) {
                return currentA;
            }

            currentB = currentB.next;
        }

        currentA = currentA.next;
    }

    return currentA;
};

export {};
