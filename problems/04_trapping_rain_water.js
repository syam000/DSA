/*
 * TRAPPING RAIN WATER
 * Difficulty: Hard
 * ─────────────────────────────────────────────────────────────
 *
 * PROBLEM STATEMENT:
 * Given `n` non-negative integers representing an elevation map
 * where the width of each bar is 1, compute how much water
 * it can trap after raining.
 *
 * ─────────────────────────────────────────────────────────────
 * VISUAL:
 *
 *   Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
 *
 *        3       |
 *        2    |  | | |
 *        1  | || |||||
 *           0 1 2 3 4 5 6 7 8 9 ...
 *
 *   The water trapped (shown as ~) fills between the bars.
 *   Output: 6
 *
 * ─────────────────────────────────────────────────────────────
 * EXAMPLES:
 *
 * Example 1:
 *   Input:  height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
 *   Output: 6
 *
 * Example 2:
 *   Input:  height = [4, 2, 0, 3, 2, 5]
 *   Output: 9
 *
 * ─────────────────────────────────────────────────────────────
 * CONSTRAINTS:
 *   - n == height.length
 *   - 1 <= n <= 2 * 10^4
 *   - 0 <= height[i] <= 10^5
 *
 * HINT:
 *   Think about what determines how much water sits on top of
 *   each bar — it's the minimum of the tallest bar to its left
 *   and the tallest bar to its right, minus its own height.
 *   Can you do this in O(n) time and O(1) space?
 *
 * ─────────────────────────────────────────────────────────────
 */

function trap(height) {
    // TODO: implement
}

// Test cases
console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));  // Expected: 6
console.log(trap([4, 2, 0, 3, 2, 5]));                      // Expected: 9
