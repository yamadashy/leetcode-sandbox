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

function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const resultResultList = new ListNode();
    let currentL1Node = l1;
    let currentL2Node = l2;
    let currentResultListNode = resultResultList;

    while (currentL1Node !== null || currentL2Node !== null) {
        const isComparable = currentL1Node !== null && currentL2Node !== null;

        if (isComparable) {
            if (currentL1Node.val < currentL2Node.val) {
                currentResultListNode = currentResultListNode.next = new ListNode();
                currentResultListNode.val = currentL1Node.val;
                currentL1Node = currentL1Node.next;
            } else if (currentL1Node.val === currentL2Node.val) {
                currentResultListNode = currentResultListNode.next = new ListNode();
                currentResultListNode.val = currentL1Node.val;
                currentL1Node = currentL1Node.next;
                currentResultListNode = currentResultListNode.next = new ListNode();
                currentResultListNode.val = currentL2Node.val;
                currentL2Node = currentL2Node.next;
            } else {
                currentResultListNode = currentResultListNode.next = new ListNode();
                currentResultListNode.val = currentL2Node.val;
                currentL2Node = currentL2Node.next;
            }
        } else {
            if (currentL1Node !== null) {
                currentResultListNode = currentResultListNode.next = new ListNode();
                currentResultListNode.val = currentL1Node.val;
                currentL1Node = currentL1Node.next;
            } else {
                currentResultListNode = currentResultListNode.next = new ListNode();
                currentResultListNode.val = currentL2Node.val;
                currentL2Node = currentL2Node.next;
            }
        }
    }

    return resultResultList.next;
}

function dumpNode(node: ListNode) {
    let currentNode = node;
    const values = [];

    while (currentNode !== null) {
        values.push(currentNode.val);
        currentNode = currentNode.next;
    }

    console.log(values);
}
