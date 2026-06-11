/*
 * DAILY TEMPERATURES
 * Difficulty: Medium
 * ─────────────────────────────────────────────────────────────
 *
 * PROBLEM STATEMENT:
 * Given an array of integers `temperatures` representing the
 * daily temperatures, return an array `answer` such that
 * `answer[i]` is the number of days you have to wait after the
 * i-th day to get a warmer temperature. If there is no future
 * day for which this is possible, keep `answer[i] == 0`.
 *
 * ─────────────────────────────────────────────────────────────
 * EXAMPLES:
 *
 * Example 1:
 *   Input:  temperatures = [73, 74, 75, 71, 69, 72, 76, 73]
 *   Output: [1, 1, 4, 2, 1, 1, 0, 0]
 *
 * Example 2:
 *   Input:  temperatures = [30, 40, 50, 60]
 *   Output: [1, 1, 1, 0]
 *
 * Example 3:
 *   Input:  temperatures = [30, 60, 90]
 *   Output: [1, 1, 0]
 *
 * ─────────────────────────────────────────────────────────────
 * CONSTRAINTS:
 *   - 1 <= temperatures.length <= 10^5
 *   - 30 <= temperatures[i] <= 100
 *
 * HINT:
 *   Use a stack of indices for days whose "warmer day" hasn't
 *   been found yet. As you scan left to right, while the current
 *   temperature is warmer than the temperature at the index on
 *   top of the stack, pop it and record the day difference.
 *   This is a "monotonic stack" pattern.
 *
 * ─────────────────────────────────────────────────────────────
 */

function dailyTemperatures(temperatures) {
    // TODO: implement
}

// Test cases
console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])); // Expected: [1,1,4,2,1,1,0,0]
console.log(dailyTemperatures([30, 40, 50, 60]));                  // Expected: [1,1,1,0]
console.log(dailyTemperatures([30, 60, 90]));                      // Expected: [1,1,0]
