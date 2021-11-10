// https://leetcode.com/problems/linked-list-cycle-ii
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

function detectCycle(head: ListNode | null): ListNode | null {
    let current = head;
    const hasCycle = false;
    const valMap: Map<ListNode, boolean> = new Map();

    while (true) {
        if (current === null) {
            break;
        }

        if (valMap.has(current)) {
            return current;
        }

        valMap.set(current, true);

        current = current.next;
    }

    return null;
}

export {};
