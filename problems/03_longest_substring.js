/*
 * LONGEST SUBSTRING WITHOUT REPEATING CHARACTERS
 * Difficulty: Medium
 * ─────────────────────────────────────────────────────────────
 *
 * PROBLEM STATEMENT:
 * Given a string `s`, find the length of the longest substring
 * without repeating characters.
 *
 * A substring is a contiguous sequence of characters within a string.
 *
 * ─────────────────────────────────────────────────────────────
 * EXAMPLES:
 *
 * Example 1:
 *   Input:  s = "abcabcbb"
 *   Output: 3
 *   Explanation: The answer is "abc", with the length of 3.
 *
 * Example 2:
 *   Input:  s = "bbbbb"
 *   Output: 1
 *   Explanation: The answer is "b", with the length of 1.
 *
 * Example 3:
 *   Input:  s = "pwwkew"
 *   Output: 3
 *   Explanation: The answer is "wke", with the length of 3.
 *                Note that "pwke" is a subsequence, not a substring.
 *
 * Example 4:
 *   Input:  s = ""
 *   Output: 0
 *
 * ─────────────────────────────────────────────────────────────
 * CONSTRAINTS:
 *   - 0 <= s.length <= 5 * 10^4
 *   - s consists of English letters, digits, symbols and spaces.
 *
 * HINT:
 *   Think about using the sliding window technique.
 *
 * ─────────────────────────────────────────────────────────────
 */

function lengthOfLongestSubstring(s) {
    // TODO: implement
}

// Test cases
console.log(lengthOfLongestSubstring("abcabcbb"));  // Expected: 3
console.log(lengthOfLongestSubstring("bbbbb"));      // Expected: 1
console.log(lengthOfLongestSubstring("pwwkew"));     // Expected: 3
console.log(lengthOfLongestSubstring(""));           // Expected: 0
