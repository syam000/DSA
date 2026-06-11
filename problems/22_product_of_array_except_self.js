/*
 * PRODUCT OF ARRAY EXCEPT SELF
 * Difficulty: Medium
 * ─────────────────────────────────────────────────────────────
 *
 * PROBLEM STATEMENT:
 * Given an integer array `nums`, return an array `answer` such
 * that `answer[i]` is equal to the product of all the elements
 * of `nums` except `nums[i]`.
 *
 * You must write an algorithm that runs in O(n) time and
 * without using the division operation.
 *
 * ─────────────────────────────────────────────────────────────
 * EXAMPLES:
 *
 * Example 1:
 *   Input:  nums = [1, 2, 3, 4]
 *   Output: [24, 12, 8, 6]
 *
 * Example 2:
 *   Input:  nums = [-1, 1, 0, -3, 3]
 *   Output: [0, 0, 9, 0, 0]
 *
 * ─────────────────────────────────────────────────────────────
 * CONSTRAINTS:
 *   - 2 <= nums.length <= 10^5
 *   - -30 <= nums[i] <= 30
 *   - The product of any prefix or suffix of nums is guaranteed
 *     to fit in a 32-bit integer.
 *
 * FOLLOW-UP:
 *   Can you solve it in O(1) extra space complexity? (The output
 *   array does not count as extra space for space complexity
 *   analysis.)
 *
 * HINT:
 *   For each index i, answer[i] = (product of everything to the
 *   left of i) * (product of everything to the right of i).
 *   Compute prefix products in one pass, then fold in suffix
 *   products in a second pass (right to left).
 *
 * ─────────────────────────────────────────────────────────────
 */

function productExceptSelf(nums) {
    // TODO: implement
}

// Test cases
console.log(productExceptSelf([1, 2, 3, 4]));     // Expected: [24, 12, 8, 6]
console.log(productExceptSelf([-1, 1, 0, -3, 3])); // Expected: [0, 0, 9, 0, 0]
