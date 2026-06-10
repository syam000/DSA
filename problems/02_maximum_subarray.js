/*
 * MAXIMUM SUBARRAY (Kadane's Algorithm)
 * Difficulty: Medium
 * ─────────────────────────────────────────────────────────────
 *
 * PROBLEM STATEMENT:
 * Given an integer array `nums`, find the contiguous subarray
 * (containing at least one number) which has the largest sum,
 * and return that sum.
 *
 * A subarray is a contiguous part of an array.
 *
 * ─────────────────────────────────────────────────────────────
 * EXAMPLES:
 *
 * Example 1:
 *   Input:  nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
 *   Output: 6
 *   Explanation: [4, -1, 2, 1] has the largest sum = 6
 *
 * Example 2:
 *   Input:  nums = [1]
 *   Output: 1
 *
 * Example 3:
 *   Input:  nums = [5, 4, -1, 7, 8]
 *   Output: 23
 *
 * ─────────────────────────────────────────────────────────────
 * CONSTRAINTS:
 *   - 1 <= nums.length <= 10^5
 *   - -10^4 <= nums[i] <= 10^4
 *
 * FOLLOW-UP:
 *   If you have figured out the O(n) solution, try coding another
 *   solution using the divide and conquer approach, which is more subtle.
 *
 * ─────────────────────────────────────────────────────────────
 */

function maxSubArray(nums) {
    if(nums != null && nums.length == 1) {
        return nums[0];
    }

    let currentSum = nums[0];
    let runningSum = nums[0];
    let maxSum = nums[0];

    for(let index = 1; index < nums.length ; index++) {

        runningSum = currentSum + nums[index];
        if(runningSum > nums[index]) {
            currentSum = runningSum;
        } else {
            currentSum = nums[index];
        }
        maxSum = Math.max(maxSum, currentSum)
    }

    return maxSum;
}

// Test cases
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));  // Expected: 6
console.log(maxSubArray([1]));                                  // Expected: 1
console.log(maxSubArray([5, 4, -1, 7, 8]));                   // Expected: 23
