/*
 * KTH LARGEST ELEMENT IN AN ARRAY (QuickSelect)
 * Difficulty: Medium
 * ─────────────────────────────────────────────────────────────
 *
 * PROBLEM STATEMENT:
 * Given an integer array `nums` and an integer `k`, return the
 * kth largest element in the array.
 *
 * Note that it is the kth largest element in sorted order,
 * not the kth distinct element.
 *
 * Can you solve it without sorting the full array?
 *
 * ─────────────────────────────────────────────────────────────
 * EXAMPLES:
 *
 * Example 1:
 *   Input:  nums = [3, 2, 1, 5, 6, 4], k = 2
 *   Output: 5
 *   Explanation: Sorted descending: [6, 5, 4, 3, 2, 1] → 2nd largest = 5
 *
 * Example 2:
 *   Input:  nums = [3, 2, 3, 1, 2, 4, 5, 5, 6], k = 4
 *   Output: 4
 *
 * ─────────────────────────────────────────────────────────────
 * CONSTRAINTS:
 *   - 1 <= k <= nums.length <= 10^5
 *   - -10^4 <= nums[i] <= 10^4
 *
 * APPROACHES:
 *   1. Sort descending and return nums[k-1]           — O(n log n)
 *   2. Min-heap of size k                             — O(n log k)
 *   3. QuickSelect (partition like QuickSort)         — O(n) average
 *
 * HINT for QuickSelect:
 *   Pick a pivot. Partition the array so everything greater than the
 *   pivot is on the left. If the pivot lands at index (k-1), that's
 *   your answer. Otherwise recurse into the relevant half.
 *
 * ─────────────────────────────────────────────────────────────
 */

function findKthLargest(nums, k) {
    // TODO: implement
}

// Test cases
console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));           // Expected: 5
console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)); // Expected: 4
