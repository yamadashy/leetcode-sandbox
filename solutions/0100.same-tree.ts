// https://leetcode.com/problems/same-tree

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  const numsP: number[] = [];
  const numsQ: number[] = [];
  inorderTraversalLoop(numsP, p);
  inorderTraversalLoop(numsQ, q);
  return JSON.stringify(p) === JSON.stringify(q);
}

function inorderTraversalLoop(nums: number[], node: TreeNode | null) {
  if (node !== null) {
    inorderTraversalLoop(nums, node.left);
    nums.push(node.val);
    inorderTraversalLoop(nums, node.right);
  } else {
    nums.push(null);
  }
}
