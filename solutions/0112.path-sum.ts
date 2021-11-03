// https://leetcode.com/problems/path-sum

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  const leafSumList: number[] = [];

  sumLoop(root, 0, leafSumList);

  return leafSumList.includes(targetSum);
};

function sumLoop(node: TreeNode | null, sum: number, leafSumList: number[]) {
  if (node === null) {
    return;
  }

  sum += node.val;

  if (node.left === null && node.right === null) {
    leafSumList.push(sum);
  }

  sumLoop(node.left, sum, leafSumList);
  sumLoop(node.right, sum, leafSumList);
}
