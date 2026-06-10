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

/**
 * Approach: Sliding Window with a Set (O(n) amortized time, O(min(n, charset)) space)
 *
 * `seen` holds exactly the characters in the current window s[left..right].
 * For each `right`, if s[right] is already in the window, shrink from the
 * left (removing characters and advancing `left`) until the duplicate is
 * evicted. Then add s[right] and update the best window size seen so far.
 *
 * @param {string} s
 * @returns {number} length of the longest substring without repeating characters
 */
function lengthOfLongestSubstring(s) {
    if(s == null || s.length == 0) {
        return 0;
    }

    let seen = new Set();
    seen.add(s[0]);
    let maxLength = 1;

    let left = 0;
    let right;

    for(right = 1 ; right < s.length; right++){

        // shrink the window from the left until s[right] is no longer a duplicate
        while(seen.has(s[right])) {
            seen.delete(s[left]);
            left = left + 1;
        }
        seen.add(s[right]);

        // window is s[left..right]; track the largest size seen
        maxLength = Math.max(maxLength, right - left + 1)
    }

    return maxLength;

}

/**
 * Alternative approach by Claude: Sliding Window with a Map (O(n) time, O(min(n, charset)) space)
 *
 * `lastSeen` maps each character to the most recent index it was seen at.
 * For each `right`, if s[right] was seen before *and* that occurrence is
 * still inside the current window (lastIndex >= left), jump `left` directly
 * to lastIndex + 1 — no need to shrink one character at a time.
 *
 * The `>= left` check matters: a character's last-seen index might be stale
 * (from before the current window started), in which case `left` must not
 * move backwards.
 *
 * @param {string} s
 * @returns {number} length of the longest substring without repeating characters
 */
function lengthOfLongestSubstringMap(s) {
    if (s == null || s.length === 0) return 0;

    const lastSeen = new Map(); // char -> most recent index seen
    let maxLength = 0;
    let left = 0;

    for (let right = 0; right < s.length; right++) {
        const char = s[right];

        if (lastSeen.has(char) && lastSeen.get(char) >= left) {
            left = lastSeen.get(char) + 1;
        }

        lastSeen.set(char, right);
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

// Test cases
console.log(lengthOfLongestSubstring("abcabcbb"));  // Expected: 3
console.log(lengthOfLongestSubstring("bbbbb"));      // Expected: 1
console.log(lengthOfLongestSubstring("pwwkew"));     // Expected: 3
console.log(lengthOfLongestSubstring(""));           // Expected: 0

console.log(lengthOfLongestSubstringMap("abcabcbb"));  // Expected: 3
console.log(lengthOfLongestSubstringMap("bbbbb"));      // Expected: 1
console.log(lengthOfLongestSubstringMap("pwwkew"));     // Expected: 3
console.log(lengthOfLongestSubstringMap(""));           // Expected: 0
