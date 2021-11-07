// https://leetcode.com/problems/binary-tree-preorder-traversal
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function preorderTraversal(root: TreeNode | null): number[] {
  const numList: number[] = [];

  preorderTraversalLoop(root, numList);

  return numList;
};


function preorderTraversalLoop(node: TreeNode | null, numList: number[]): void{
  if (node === null) {
    return;
  }

  numList.push(node.val);
  preorderTraversalLoop(node.left, numList);
  preorderTraversalLoop(node.right, numList);
}

export {};
