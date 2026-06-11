/*
 * LONGEST COMMON SUBSEQUENCE
 * Difficulty: Medium
 * ─────────────────────────────────────────────────────────────
 *
 * PROBLEM STATEMENT:
 * Given two strings `text1` and `text2`, return the length of
 * their longest common subsequence. If there is no common
 * subsequence, return 0.
 *
 * A subsequence is a sequence that can be derived from another
 * sequence by deleting some or no elements without changing the
 * order of the remaining elements.
 *
 * A common subsequence of two strings is a subsequence that is
 * common to both strings.
 *
 * ─────────────────────────────────────────────────────────────
 * EXAMPLES:
 *
 * Example 1:
 *   Input:  text1 = "abcde", text2 = "ace"
 *   Output: 3
 *   Explanation: The LCS is "ace", which has length 3.
 *
 * Example 2:
 *   Input:  text1 = "abc", text2 = "abc"
 *   Output: 3
 *   Explanation: The LCS is "abc", which has length 3.
 *
 * Example 3:
 *   Input:  text1 = "abc", text2 = "def"
 *   Output: 0
 *   Explanation: There is no common subsequence.
 *
 * ─────────────────────────────────────────────────────────────
 * CONSTRAINTS:
 *   - 1 <= text1.length, text2.length <= 1000
 *   - text1 and text2 consist of only lowercase English characters.
 *
 * HINT:
 *   Think 2D DP. Build a table where dp[i][j] represents the LCS
 *   of text1[0..i-1] and text2[0..j-1].
 *   If text1[i-1] == text2[j-1], extend the previous LCS by 1.
 *   Otherwise, take the max of ignoring one character from either string.
 *
 * ─────────────────────────────────────────────────────────────
 */

function longestCommonSubsequence(text1, text2) {
    // TODO: implement
}

// Test cases
console.log(longestCommonSubsequence("abcde", "ace"));   // Expected: 3
console.log(longestCommonSubsequence("abc", "abc"));     // Expected: 3
console.log(longestCommonSubsequence("abc", "def"));     // Expected: 0
