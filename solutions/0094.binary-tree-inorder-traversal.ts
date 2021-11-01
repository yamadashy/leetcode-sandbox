// https://leetcode.com/problems/binary-tree-inorder-traversal

function inorderTraversal(root: TreeNode | null): number[] {
  const nums: number[] = [];
  inorderTraversalLoop(nums, root);
  return nums;
}

function inorderTraversalLoop(nums: number[], node: TreeNode | null) {
  if (node !== null) {
    inorderTraversalLoop(nums, node.left);
    nums.push(node.val);
    inorderTraversalLoop(nums, node.right);
  }
}
