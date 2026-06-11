/*
 * VALID ANAGRAM
 * Difficulty: Easy
 * ─────────────────────────────────────────────────────────────
 *
 * PROBLEM STATEMENT:
 * Given two strings `s` and `t`, return true if `t` is an
 * anagram of `s`, and false otherwise.
 *
 * An anagram is a word formed by rearranging the letters of
 * another, using all the original letters exactly once.
 *
 * ─────────────────────────────────────────────────────────────
 * EXAMPLES:
 *
 * Example 1:
 *   Input:  s = "anagram", t = "nagaram"
 *   Output: true
 *
 * Example 2:
 *   Input:  s = "rat", t = "car"
 *   Output: false
 *
 * ─────────────────────────────────────────────────────────────
 * CONSTRAINTS:
 *   - 1 <= s.length, t.length <= 5 * 10^4
 *   - s and t consist of lowercase English letters.
 *
 * FOLLOW-UP:
 *   What if the inputs contain Unicode characters? How would
 *   you adapt your solution?
 *
 * HINT:
 *   Count the frequency of each character in both strings and
 *   compare. A hashmap (or a fixed-size array for lowercase
 *   letters) works well here.
 *
 * ─────────────────────────────────────────────────────────────
 */

function isAnagram(s, t) {
    // TODO: implement
}

// Test cases
console.log(isAnagram("anagram", "nagaram"));  // Expected: true
console.log(isAnagram("rat", "car"));          // Expected: false
