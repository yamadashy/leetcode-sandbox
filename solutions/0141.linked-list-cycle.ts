// https://leetcode.com/problems/linked-list-cycle
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

function hasCycle(head: ListNode | null): boolean {
  let current = head;
  let hasCycle = false;
  const valMap: Map<ListNode, boolean> = new Map();

  while (true) {
    if (current === null) {
      break;
    }

    if (valMap.has(current)) {
      hasCycle = true;
      break;
    }

    valMap.set(current, true);

    current = current.next;
  }

  return hasCycle;
};
