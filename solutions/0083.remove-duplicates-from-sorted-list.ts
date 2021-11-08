// https://leetcode.com/problems/remove-duplicates-from-sorted-list
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

function deleteDuplicates(head: ListNode | null): ListNode | null {
    let currentNode = head;

    if (currentNode === null) {
        return head;
    }

    while (true) {
        if (currentNode.next === null) {
            break;
        }

        const nextNode = currentNode.next;

        if (currentNode.val === nextNode.val) {
            currentNode.next = nextNode.next;
        } else {
            currentNode = nextNode;
        }
    }

    return head;
}

export {};
