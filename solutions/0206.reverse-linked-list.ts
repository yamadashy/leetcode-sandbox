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

class ListNode {
  val: number
  next: ListNode | null

  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

function reverseList(head: ListNode | null): ListNode | null {
  let currentNode = head;
  let newCurrentNode = null;

  while (currentNode !== null) {
    const newCurrentNodePrev = new ListNode;
    newCurrentNodePrev.val = currentNode.val;
    newCurrentNodePrev.next = newCurrentNode;
    newCurrentNode = newCurrentNodePrev;

    currentNode = currentNode.next;
  }

  return newCurrentNode;
}
