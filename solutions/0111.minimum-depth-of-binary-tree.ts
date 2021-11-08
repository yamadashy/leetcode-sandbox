// https://leetcode.com/problems/minimum-depth-of-binary-tree

function minDepth(root: TreeNode | null): number {
    const leafDepthList: number[] = [];

    depthLoop(root, 0, leafDepthList);

    if (leafDepthList.length === 0) {
        return 0;
    }

    return Math.min(...leafDepthList);
}

function depthLoop(node: TreeNode | null, depth: number, leafDepthList: number[]) {
    if (node === null) {
        return;
    }

    depth++;

    if (node.left === null && node.right === null) {
        leafDepthList.push(depth);
    }

    depthLoop(node.left, depth, leafDepthList);
    depthLoop(node.right, depth, leafDepthList);
}

export {};
