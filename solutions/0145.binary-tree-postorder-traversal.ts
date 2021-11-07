// https://leetcode.com/problems/binary-tree-postorder-traversal
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

function postorderTraversal(root: TreeNode | null): number[] {
    const numList: number[] = [];

    postorderTraversalLoop(root, numList);

    return numList;
}

function postorderTraversalLoop(node: TreeNode | null, numList: number[]): void {
    if (node === null) {
        return;
    }

    postorderTraversalLoop(node.left, numList);
    postorderTraversalLoop(node.right, numList);
    numList.push(node.val);
}

export {};
