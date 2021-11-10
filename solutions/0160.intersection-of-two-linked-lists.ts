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
    const nodeMap = new Map<ListNode, boolean>();

    while (currentA !== null || currentB !== null) {
        if (currentA !== null) {
            if (nodeMap.has(currentA)) {
                return currentA;
            }

            nodeMap.set(currentA, true);
            currentA = currentA.next;
        }

        if (currentB !== null) {
            if (nodeMap.has(currentB)) {
                return currentB;
            }

            nodeMap.set(currentB, true);
            currentB = currentB.next;
        }
    }

    return null;
}

export {};
