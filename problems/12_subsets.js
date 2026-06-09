/*
 * SUBSETS
 * Difficulty: Medium
 * ─────────────────────────────────────────────────────────────
 *
 * PROBLEM STATEMENT:
 * Given an integer array `nums` of unique elements, return all
 * possible subsets (the power set).
 *
 * The solution set must not contain duplicate subsets.
 * Return the solution in any order.
 *
 * ─────────────────────────────────────────────────────────────
 * EXAMPLES:
 *
 * Example 1:
 *   Input:  nums = [1, 2, 3]
 *   Output: [[], [1], [2], [3], [1,2], [1,3], [2,3], [1,2,3]]
 *   (order does not matter)
 *
 * Example 2:
 *   Input:  nums = [0]
 *   Output: [[], [0]]
 *
 * ─────────────────────────────────────────────────────────────
 * CONSTRAINTS:
 *   - 1 <= nums.length <= 10
 *   - -10 <= nums[i] <= 10
 *   - All numbers in nums are unique.
 *
 * APPROACHES:
 *   1. Backtracking — at each step, choose to include or exclude
 *      the current element, then recurse.
 *   2. Iterative — start with [[]], then for each number, add it
 *      to every existing subset to generate new ones.
 *   3. Bit manipulation — each number from 0 to 2^n - 1 represents
 *      a subset via its binary bits.
 *
 * HINT:
 *   There are exactly 2^n subsets for an array of n unique elements.
 *
 * ─────────────────────────────────────────────────────────────
 */

function subsets(nums) {
    // TODO: implement
}

// Test cases
console.log(subsets([1, 2, 3]));  // Expected: [[], [1], [2], [3], [1,2], [1,3], [2,3], [1,2,3]]
console.log(subsets([0]));         // Expected: [[], [0]]
