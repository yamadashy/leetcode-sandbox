// https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii
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
    let currentNode2: ListNode = null;
    let rootNode: ListNode = null;

    if (currentNode === null) {
        return head;
    }

    while (true) {
        if (currentNode === null) {
            break;
        }

        if (currentNode.next === null) {
            if (currentNode2 === null) {
                rootNode = new ListNode(currentNode.val);
                currentNode2 = rootNode;
            } else {
                currentNode2.next = new ListNode(currentNode.val);
                currentNode2 = currentNode2.next;
            }
            break;
        }

        if (currentNode.val !== currentNode.next.val) {
            if (currentNode2 === null) {
                rootNode = new ListNode(currentNode.val);
                currentNode2 = rootNode;
            } else {
                currentNode2.next = new ListNode(currentNode.val);
                currentNode2 = currentNode2.next;
            }
        } else {
            while (true) {
                if (currentNode === null) {
                    break;
                }
                if (currentNode.next === null) {
                    break;
                }
                if (currentNode.val !== currentNode.next.val) {
                    break;
                }
                currentNode = currentNode.next;
            }
        }

        currentNode = currentNode.next;
    }

    return rootNode;
}

export {};
