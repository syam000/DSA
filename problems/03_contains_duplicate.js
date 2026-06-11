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

/**
 * Approach: Set with early exit (O(n) time, O(n) space)
 *
 * Walk through nums, checking each value against a Set of values seen
 * so far. If a value is already in the set, we've found a duplicate
 * and can return immediately without scanning the rest of the array.
 *
 * @param {number[]} nums
 * @returns {boolean} true if any value appears at least twice
 */
function containsDuplicate(nums) {
    if(nums == null)
        return false;
    if(nums.length == 0)
        return false;
    let unique = new Set();

    for (let index = 0; index < nums.length; index++) {
        if(unique.has(nums[index]))
            return true;
        unique.add(nums[index]);

    }
    return false;
}

// Test cases
console.log(containsDuplicate([1, 2, 3, 1]));               // Expected: true
console.log(containsDuplicate([1, 2, 3, 4]));               // Expected: false
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // Expected: true
