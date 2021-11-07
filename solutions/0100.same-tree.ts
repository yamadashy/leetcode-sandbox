// https://leetcode.com/problems/same-tree

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    const numsP: number[] = [];
    const numsQ: number[] = [];
    preorderTraversalLoop(numsP, p);
    preorderTraversalLoop(numsQ, q);
    return JSON.stringify(p) === JSON.stringify(q);
}

function preorderTraversalLoop(nums: number[], node: TreeNode | null) {
    if (node !== null) {
        preorderTraversalLoop(nums, node.left);
        preorderTraversalLoop(nums, node.right);
        nums.push(node.val);
    }
}
