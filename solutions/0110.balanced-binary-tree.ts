// https://leetcode.com/problems/balanced-binary-tree

function isBalanced(root: TreeNode | null): boolean {
  if (root === null) {
    return true;
  }

  const [, isBalanced] = maxDepthLoop(root, 0);

  return isBalanced;
};

function maxDepthLoop(node: TreeNode | null, depth: number): [number, boolean] {
  if (node === null) {
    return [depth, true];
  }

  const [leftDepth, isLeftBalanced] = maxDepthLoop(node.left, 0);
  const [rightDepth, isRightBalanced] = maxDepthLoop(node.right, 0);
  const isBalanced = Math.abs(leftDepth - rightDepth) <= 1;

  return [Math.max(leftDepth, rightDepth) + 1, isLeftBalanced && isRightBalanced && isBalanced];
}
