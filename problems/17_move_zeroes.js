/*
 * MOVE ZEROES
 * Difficulty: Easy
 * ─────────────────────────────────────────────────────────────
 *
 * PROBLEM STATEMENT:
 * Given an integer array `nums`, move all 0's to the end of it
 * while maintaining the relative order of the non-zero elements.
 *
 * Note: You must do this in-place without making a copy of the
 * array.
 *
 * ─────────────────────────────────────────────────────────────
 * EXAMPLES:
 *
 * Example 1:
 *   Input:  nums = [0, 1, 0, 3, 12]
 *   Output: [1, 3, 12, 0, 0]
 *
 * Example 2:
 *   Input:  nums = [0]
 *   Output: [0]
 *
 * ─────────────────────────────────────────────────────────────
 * CONSTRAINTS:
 *   - 1 <= nums.length <= 10^4
 *   - -2^31 <= nums[i] <= 2^31 - 1
 *
 * FOLLOW-UP:
 *   Could you minimize the total number of operations done?
 *
 * HINT:
 *   Use a "write pointer" that tracks where the next non-zero
 *   element should go. Walk through the array once, swapping
 *   non-zero elements into place.
 *
 * ─────────────────────────────────────────────────────────────
 */

function moveZeroes(nums) {
    // TODO: implement (modify nums in-place)
}

// Test cases
let arr1 = [0, 1, 0, 3, 12];
moveZeroes(arr1);
console.log(arr1); // Expected: [1, 3, 12, 0, 0]

let arr2 = [0];
moveZeroes(arr2);
console.log(arr2); // Expected: [0]
