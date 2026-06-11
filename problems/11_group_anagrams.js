/*
 * GROUP ANAGRAMS
 * Difficulty: Medium
 * ─────────────────────────────────────────────────────────────
 *
 * PROBLEM STATEMENT:
 * Given an array of strings `strs`, group the anagrams together.
 * You can return the answer in any order.
 *
 * ─────────────────────────────────────────────────────────────
 * EXAMPLES:
 *
 * Example 1:
 *   Input:  strs = ["eat","tea","tan","ate","nat","bat"]
 *   Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
 *
 * Example 2:
 *   Input:  strs = [""]
 *   Output: [[""]]
 *
 * Example 3:
 *   Input:  strs = ["a"]
 *   Output: [["a"]]
 *
 * ─────────────────────────────────────────────────────────────
 * CONSTRAINTS:
 *   - 1 <= strs.length <= 10^4
 *   - 0 <= strs[i].length <= 100
 *   - strs[i] consists of lowercase English letters.
 *
 * HINT:
 *   Two strings are anagrams if and only if their sorted
 *   characters are identical. Use the sorted string (or a
 *   character-count signature) as a hashmap key, and group
 *   original strings under that key.
 *
 * ─────────────────────────────────────────────────────────────
 */

function groupAnagrams(strs) {
    // TODO: implement
}

// Test cases
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// Expected: [["eat","tea","ate"],["tan","nat"],["bat"]] (any grouping/order)

console.log(groupAnagrams([""]));  // Expected: [[""]]
console.log(groupAnagrams(["a"])); // Expected: [["a"]]
