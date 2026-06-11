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

/**
 * Approach: Stack of opening brackets (O(n) time, O(n) space)
 *
 * Push every opening bracket onto the stack. When a closing bracket is
 * seen, it must match the bracket on top of the stack (the most
 * recently opened, unclosed bracket) — otherwise the string is invalid.
 *
 * After processing all characters, the stack must be empty — any
 * remaining opening brackets were never closed.
 *
 * @param {string} s
 * @returns {boolean} true if the brackets in s are balanced and properly nested
 */
function isValid(s) {
    if(s == null || s.length == 0)
        return false;

    let stack = [];

    for (let index = 0; index < s.length; index++) {
        const element = s[index];

        if(element === '(' || element === '[' || element === '{' )
            stack.push(element);
        else {

            let top = stack[stack.length-1];
            switch (element) {
                case ')':
                    if(top === '(' ) {
                        stack.pop();
                    }
                    else {
                        return false;
                    }
                    break;
                case ']':
                     if(top === '[' ) {
                        stack.pop();
                    }
                    else {
                        return false;
                    }
                    break;
                case '}':
                     if(top === '{' ) {
                        stack.pop();
                    }
                    else {
                        return false;
                    }
                    break;

                default:
                    break;
            }
        }

    }

    // a valid string must close every opening bracket it pushed
    return stack.length === 0;

}

// Test cases
console.log(isValid("()"));     // Expected: true
console.log(isValid("()[]{}")); // Expected: true
console.log(isValid("(]"));     // Expected: false
console.log(isValid("([)]"));   // Expected: false
console.log(isValid("{[]}"));   // Expected: true
