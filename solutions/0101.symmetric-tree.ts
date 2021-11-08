// https://leetcode.com/problems/symmetric-tree

function isSymmetric(root: TreeNode | null): boolean {
    const numsLeft: number[] = [];
    const numsRight: number[] = [];

    preorderTraversalLoop(numsLeft, root.left, false);
    preorderTraversalLoop(numsRight, root.right, true);

    return JSON.stringify(numsLeft) === JSON.stringify(numsRight);
}

function preorderTraversalLoop(nums: number[], node: TreeNode | null, isReverse: boolean) {
    if (node !== null) {
        if (isReverse) {
            nums.push(node.val);
            preorderTraversalLoop(nums, node.right, isReverse);
            preorderTraversalLoop(nums, node.left, isReverse);
        } else {
            nums.push(node.val);
            preorderTraversalLoop(nums, node.left, isReverse);
            preorderTraversalLoop(nums, node.right, isReverse);
        }
    } else {
        nums.push(null);
    }
}

export {};
