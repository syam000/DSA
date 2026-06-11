/*
 * MIN STACK
 * Difficulty: Medium
 * ─────────────────────────────────────────────────────────────
 *
 * PROBLEM STATEMENT:
 * Design a stack that supports push, pop, top, and retrieving
 * the minimum element in constant time.
 *
 * Implement the `MinStack` class:
 *   - push(val) — Pushes the element val onto the stack.
 *   - pop()     — Removes the element on the top of the stack.
 *   - top()     — Gets the top element of the stack.
 *   - getMin()  — Retrieves the minimum element in the stack.
 *
 * Each function must run in O(1) time.
 *
 * ─────────────────────────────────────────────────────────────
 * EXAMPLE:
 *
 *   Input:
 *     ["MinStack", "push", "push", "push", "getMin", "pop", "top", "getMin"]
 *     [[],         [-2],   [0],    [-3],   [],       [],    [],    []]
 *
 *   Output:
 *     [null, null, null, null, -3, null, 0, -2]
 *
 *   Explanation:
 *     MinStack minStack = new MinStack();
 *     minStack.push(-2);
 *     minStack.push(0);
 *     minStack.push(-3);
 *     minStack.getMin(); // return -3
 *     minStack.pop();
 *     minStack.top();    // return 0
 *     minStack.getMin(); // return -2
 *
 * ─────────────────────────────────────────────────────────────
 * CONSTRAINTS:
 *   - -2^31 <= val <= 2^31 - 1
 *   - Methods pop, top, and getMin will always be called on a
 *     non-empty stack.
 *   - At most 3 * 10^4 calls will be made to push, pop, top,
 *     and getMin.
 *
 * HINT:
 *   Maintain a second stack that tracks the minimum value at
 *   each level of the main stack. Whenever you push a value,
 *   also push the current minimum (the smaller of the new value
 *   and the previous minimum) onto the min-stack.
 *
 * ─────────────────────────────────────────────────────────────
 */

class MinStack {
    constructor() {
        // TODO: implement
    }

    push(val) {
        // TODO: implement
    }

    pop() {
        // TODO: implement
    }

    top() {
        // TODO: implement
    }

    getMin() {
        // TODO: implement
    }
}

// Test cases
const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin()); // Expected: -3
minStack.pop();
console.log(minStack.top());    // Expected: 0
console.log(minStack.getMin()); // Expected: -2
