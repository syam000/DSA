/*
 * CONTAINS DUPLICATE
 * Difficulty: Easy
 * ─────────────────────────────────────────────────────────────
 *
 * PROBLEM STATEMENT:
 * Given an integer array `nums`, return true if any value
 * appears at least twice in the array, and return false if
 * every element is distinct.
 *
 * ─────────────────────────────────────────────────────────────
 * EXAMPLES:
 *
 * Example 1:
 *   Input:  nums = [1, 2, 3, 1]
 *   Output: true
 *
 * Example 2:
 *   Input:  nums = [1, 2, 3, 4]
 *   Output: false
 *
 * Example 3:
 *   Input:  nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]
 *   Output: true
 *
 * ─────────────────────────────────────────────────────────────
 * CONSTRAINTS:
 *   - 1 <= nums.length <= 10^5
 *   - -10^9 <= nums[i] <= 10^9
 *
 * HINT:
 *   A Set lets you check membership and insert in O(1) average
 *   time. Can you solve this in a single pass?
 *
 * ─────────────────────────────────────────────────────────────
 */

function containsDuplicate(nums) {
    // TODO: implement
}

// Test cases
console.log(containsDuplicate([1, 2, 3, 1]));               // Expected: true
console.log(containsDuplicate([1, 2, 3, 4]));               // Expected: false
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // Expected: true
