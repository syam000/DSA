/*
 * FIRST UNIQUE CHARACTER IN A STRING
 * Difficulty: Easy
 * ─────────────────────────────────────────────────────────────
 *
 * PROBLEM STATEMENT:
 * Given a string `s`, find the first non-repeating character
 * in it and return its index. If it does not exist, return -1.
 *
 * ─────────────────────────────────────────────────────────────
 * EXAMPLES:
 *
 * Example 1:
 *   Input:  s = "leetcode"
 *   Output: 0
 *   Explanation: 'l' appears only once and is the first such char.
 *
 * Example 2:
 *   Input:  s = "loveleetcode"
 *   Output: 2
 *   Explanation: 'v' is the first character that appears only once.
 *
 * Example 3:
 *   Input:  s = "aabb"
 *   Output: -1
 *   Explanation: every character repeats.
 *
 * ─────────────────────────────────────────────────────────────
 * CONSTRAINTS:
 *   - 1 <= s.length <= 10^5
 *   - s consists of only lowercase English letters.
 *
 * HINT:
 *   First pass: count the frequency of every character using a
 *   hashmap. Second pass: return the index of the first
 *   character whose count is 1.
 *
 * ─────────────────────────────────────────────────────────────
 */

function firstUniqChar(s) {
    // TODO: implement
}

// Test cases
console.log(firstUniqChar("leetcode"));     // Expected: 0
console.log(firstUniqChar("loveleetcode")); // Expected: 2
console.log(firstUniqChar("aabb"));         // Expected: -1
