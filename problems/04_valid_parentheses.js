/*
 * VALID PARENTHESES
 * Difficulty: Easy
 * ─────────────────────────────────────────────────────────────
 *
 * PROBLEM STATEMENT:
 * Given a string `s` containing just the characters
 * '(', ')', '{', '}', '[' and ']', determine if the input
 * string is valid.
 *
 * An input string is valid if:
 *   1. Open brackets must be closed by the same type of bracket.
 *   2. Open brackets must be closed in the correct order.
 *   3. Every close bracket has a corresponding open bracket of
 *      the same type.
 *
 * ─────────────────────────────────────────────────────────────
 * EXAMPLES:
 *
 * Example 1:
 *   Input:  s = "()"
 *   Output: true
 *
 * Example 2:
 *   Input:  s = "()[]{}"
 *   Output: true
 *
 * Example 3:
 *   Input:  s = "(]"
 *   Output: false
 *
 * Example 4:
 *   Input:  s = "([)]"
 *   Output: false
 *
 * Example 5:
 *   Input:  s = "{[]}"
 *   Output: true
 *
 * ─────────────────────────────────────────────────────────────
 * CONSTRAINTS:
 *   - 1 <= s.length <= 10^4
 *   - s consists only of the characters '()[]{}'.
 *
 * HINT:
 *   Use a stack. Push opening brackets. When you see a closing
 *   bracket, check that it matches the bracket on top of the
 *   stack.
 *
 * ─────────────────────────────────────────────────────────────
 */

function isValid(s) {
    // TODO: implement
}

// Test cases
console.log(isValid("()"));     // Expected: true
console.log(isValid("()[]{}")); // Expected: true
console.log(isValid("(]"));     // Expected: false
console.log(isValid("([)]"));   // Expected: false
console.log(isValid("{[]}"));   // Expected: true
