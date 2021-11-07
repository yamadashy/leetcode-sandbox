// https://leetcode.com/problems/maximum-depth-of-binary-tree

function maxDepth(root: TreeNode | null): number {
    return maxDepthLoop(root, 0);
}

function maxDepthLoop(node: TreeNode | null, depth: number): number {
    if (node === null) {
        return depth;
    }

    return Math.max(maxDepthLoop(node.left, depth), maxDepthLoop(node.right, depth)) + 1;
}
