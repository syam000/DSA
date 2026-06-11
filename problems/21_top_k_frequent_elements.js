/*
 * TOP K FREQUENT ELEMENTS
 * Difficulty: Medium
 * ─────────────────────────────────────────────────────────────
 *
 * PROBLEM STATEMENT:
 * Given an integer array `nums` and an integer `k`, return the
 * `k` most frequent elements. You may return the answer in any
 * order.
 *
 * ─────────────────────────────────────────────────────────────
 * EXAMPLES:
 *
 * Example 1:
 *   Input:  nums = [1, 1, 1, 2, 2, 3], k = 2
 *   Output: [1, 2]
 *
 * Example 2:
 *   Input:  nums = [1], k = 1
 *   Output: [1]
 *
 * ─────────────────────────────────────────────────────────────
 * CONSTRAINTS:
 *   - 1 <= nums.length <= 10^5
 *   - k is in the range [1, number of unique elements in nums].
 *   - It is guaranteed that the answer is unique.
 *
 * FOLLOW-UP:
 *   Your algorithm's time complexity must be better than
 *   O(n log n), where n is the array's size. (Hint: bucket sort.)
 *
 * HINT:
 *   1. Count the frequency of each number using a hashmap.
 *   2. Create "buckets" indexed by frequency (1..n), where each
 *      bucket holds all numbers with that frequency.
 *   3. Walk the buckets from highest frequency to lowest,
 *      collecting numbers until you have k of them.
 *
 * ─────────────────────────────────────────────────────────────
 */

function topKFrequent(nums, k) {
    // TODO: implement
}

// Test cases
console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2)); // Expected: [1, 2] (any order)
console.log(topKFrequent([1], 1));                 // Expected: [1]
