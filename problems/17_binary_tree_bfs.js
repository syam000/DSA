/*
 * BINARY TREE LEVEL ORDER TRAVERSAL (BFS)
 * Difficulty: Medium
 * ─────────────────────────────────────────────────────────────
 *
 * PROBLEM STATEMENT:
 * Given the root of a binary tree, return the level order traversal
 * of its nodes' values (i.e., from left to right, level by level).
 *
 * ─────────────────────────────────────────────────────────────
 * EXAMPLES:
 *
 * Example 1:
 *         3
 *        / \
 *       9  20
 *         /  \
 *        15   7
 *
 *   Input:  root = [3, 9, 20, null, null, 15, 7]
 *   Output: [[3], [9, 20], [15, 7]]
 *
 * Example 2:
 *   Input:  root = [1]
 *   Output: [[1]]
 *
 * Example 3:
 *   Input:  root = []
 *   Output: []
 *
 * ─────────────────────────────────────────────────────────────
 * CONSTRAINTS:
 *   - The number of nodes in the tree is in the range [0, 2000].
 *   - -1000 <= Node.val <= 1000
 *
 * HINT:
 *   Use a queue. Process all nodes at the current level before
 *   moving on to the next.
 *
 * ─────────────────────────────────────────────────────────────
 */

class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function levelOrder(root) {
    // TODO: implement
}

// Helper to build tree from array
function buildTree(arr) {
    if (!arr.length) return null;
    const root = new TreeNode(arr[0]);
    const queue = [root];
    let i = 1;
    while (i < arr.length) {
        const node = queue.shift();
        if (arr[i] !== null) { node.left = new TreeNode(arr[i]); queue.push(node.left); }
        i++;
        if (i < arr.length && arr[i] !== null) { node.right = new TreeNode(arr[i]); queue.push(node.right); }
        i++;
    }
    return root;
}

// Test cases
console.log(levelOrder(buildTree([3, 9, 20, null, null, 15, 7])));  // Expected: [[3],[9,20],[15,7]]
console.log(levelOrder(buildTree([1])));                             // Expected: [[1]]
console.log(levelOrder(null));                                       // Expected: []
