/*
 * TWO SUM
 * Difficulty: Easy
 * ─────────────────────────────────────────────────────────────
 *
 * PROBLEM STATEMENT:
 * Given an array of integers `nums` and an integer `target`,
 * return the indices of the two numbers that add up to `target`.
 *
 * You may assume that each input has exactly one solution,
 * and you may not use the same element twice.
 *
 * You can return the answer in any order.
 *
 * ─────────────────────────────────────────────────────────────
 * EXAMPLES:
 *
 * Example 1:
 *   Input:  nums = [2, 7, 11, 15], target = 9
 *   Output: [0, 1]
 *   Explanation: nums[0] + nums[1] = 2 + 7 = 9
 *
 * Example 2:
 *   Input:  nums = [3, 2, 4], target = 6
 *   Output: [1, 2]
 *
 * Example 3:
 *   Input:  nums = [3, 3], target = 6
 *   Output: [0, 1]
 *
 * ─────────────────────────────────────────────────────────────
 * CONSTRAINTS:
 *   - 2 <= nums.length <= 10^4
 *   - -10^9 <= nums[i] <= 10^9
 *   - -10^9 <= target <= 10^9
 *   - Only one valid answer exists.
 *
 * FOLLOW-UP:
 *   Can you solve it in O(n) time complexity?
 *
 * ─────────────────────────────────────────────────────────────
 */

/**
 * Approach: One-pass hashmap (O(n) time, O(n) space)
 *
 * For each element, store its complement (target - element) mapped to its index.
 * If the current element already exists as a complement in the map, we found the pair.
 *
 * @param {number[]} nums
 * @param {number} target
 * @returns {number[]} indices of the two numbers that add up to target, or [-1,-1] if none
 */
function twoSum(nums, target) {
    if (nums == null || nums.length == 0) {
        return [-1, -1];
    }

    // map: complement value → index of the element that needs it
    const seen = new Map();
    seen.set(target - nums[0], 0);

    for (let index = 1; index < nums.length; index++) {
        const itemToCheck = nums[index];

        if (seen.has(itemToCheck)) {
            // current element is the complement someone earlier was waiting for
            return [seen.get(itemToCheck), index];
        }

        seen.set(target - itemToCheck, index);
    }

    return [-1, -1];
}

// Test cases
console.log(twoSum([2, 7, 11, 15], 9));  // Expected: [0, 1]
console.log(twoSum([3, 2, 4], 6));        // Expected: [1, 2]
console.log(twoSum([3, 3], 6));           // Expected: [0, 1]
