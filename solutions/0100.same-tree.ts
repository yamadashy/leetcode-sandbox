// https://leetcode.com/problems/same-tree

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  return JSON.stringify(p) === JSON.stringify(q);
}
