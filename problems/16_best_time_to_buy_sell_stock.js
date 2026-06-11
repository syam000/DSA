/*
 * BEST TIME TO BUY AND SELL STOCK
 * Difficulty: Easy
 * ─────────────────────────────────────────────────────────────
 *
 * PROBLEM STATEMENT:
 * You are given an array `prices` where `prices[i]` is the
 * price of a given stock on the i-th day.
 *
 * You want to maximize your profit by choosing a single day to
 * buy one stock and choosing a different day in the future to
 * sell that stock.
 *
 * Return the maximum profit you can achieve from this
 * transaction. If you cannot achieve any profit, return 0.
 *
 * ─────────────────────────────────────────────────────────────
 * EXAMPLES:
 *
 * Example 1:
 *   Input:  prices = [7, 1, 5, 3, 6, 4]
 *   Output: 5
 *   Explanation: Buy on day 2 (price = 1) and sell on day 5
 *                (price = 6), profit = 6 - 1 = 5.
 *
 * Example 2:
 *   Input:  prices = [7, 6, 4, 3, 1]
 *   Output: 0
 *   Explanation: Prices only decrease, no profit is possible.
 *
 * ─────────────────────────────────────────────────────────────
 * CONSTRAINTS:
 *   - 1 <= prices.length <= 10^5
 *   - 0 <= prices[i] <= 10^4
 *
 * HINT:
 *   Track the lowest price seen so far as you iterate. At each
 *   day, the best profit if you sold today is `price - minSoFar`.
 *
 * ─────────────────────────────────────────────────────────────
 */

function maxProfit(prices) {
    // TODO: implement
}

// Test cases
console.log(maxProfit([7, 1, 5, 3, 6, 4])); // Expected: 5
console.log(maxProfit([7, 6, 4, 3, 1]));    // Expected: 0
