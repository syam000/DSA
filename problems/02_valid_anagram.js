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

/**
 * Approach: Hashmap of net character counts (O(n) time, O(k) space)
 *
 * For each index i, increment the count for s[i] and decrement the
 * count for t[i] in the same map. Addition is commutative, so this is
 * equivalent to counting all of s then subtracting all of t.
 *
 * If s and t are anagrams, every character's net count ends at 0.
 *
 * @param {string} s
 * @param {string} t
 * @returns {boolean} true if t is an anagram of s
 */
function isAnagram(s, t) {
    if (s == null || t == null)
        return false;

    if (s.length !== t.length)
        return false;

    let seen = new Map();

    for(let index = 0; index < s.length; index ++) {
        let sChar = s[index];
        let tChar = t[index];

        if(seen.has(sChar)){
            seen.set(sChar, seen.get(sChar)+1);
        } else {
            seen.set(sChar,1);
        }

         if(seen.has(tChar)){
            seen.set(tChar, seen.get(tChar)-1);
        } else {
            seen.set(tChar,-1);
        }
    }

    return [...seen.values()].every(val => val === 0);

}

/**
 * Alternative approach by Claude: Fixed-size array of 26 counters
 * (O(n) time, O(1) space)
 *
 * Same net-count idea as isAnagram, but since the input is guaranteed
 * to be lowercase English letters, we can use a 26-slot array indexed
 * by `charCode - 'a'.charCodeAt(0)` instead of a Map. This avoids
 * hashmap overhead and the spread needed to iterate Map.values().
 *
 * @param {string} s
 * @param {string} t
 * @returns {boolean} true if t is an anagram of s
 */
function isAnagramArray(s, t) {
    if (s == null || t == null) return false;
    if (s.length !== t.length) return false;

    const counts = new Array(26).fill(0);
    const aCode = 'a'.charCodeAt(0);

    for (let i = 0; i < s.length; i++) {
        counts[s.charCodeAt(i) - aCode]++;
        counts[t.charCodeAt(i) - aCode]--;
    }

    return counts.every(count => count === 0);
}

// Test cases
console.log(isAnagram("anagram", "nagaram"));  // Expected: true
console.log(isAnagram("rat", "car"));          // Expected: false

console.log(isAnagramArray("anagram", "nagaram"));  // Expected: true
console.log(isAnagramArray("rat", "car"));          // Expected: false
