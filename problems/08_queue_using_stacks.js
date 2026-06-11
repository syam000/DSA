/*
 * IMPLEMENT QUEUE USING STACKS
 * Difficulty: Easy
 * ─────────────────────────────────────────────────────────────
 *
 * PROBLEM STATEMENT:
 * Implement a first in first out (FIFO) queue using only two
 * stacks. The implemented queue should support all the
 * functions of a normal queue (push, peek, pop, and empty).
 *
 * Implement the `MyQueue` class:
 *   - push(x)  — Pushes element x to the back of the queue.
 *   - pop()    — Removes the element from the front of the
 *                queue and returns it.
 *   - peek()   — Returns the element at the front of the queue.
 *   - empty()  — Returns true if the queue is empty, false
 *                otherwise.
 *
 * ─────────────────────────────────────────────────────────────
 * EXAMPLE:
 *
 *   Input:
 *     ["MyQueue", "push", "push", "peek", "pop", "empty"]
 *     [[],        [1],    [2],    [],     [],    []]
 *
 *   Output:
 *     [null, null, null, 1, 1, false]
 *
 *   Explanation:
 *     MyQueue queue = new MyQueue();
 *     queue.push(1);     // queue: [1]
 *     queue.push(2);     // queue: [1, 2]
 *     queue.peek();      // return 1
 *     queue.pop();       // return 1, queue: [2]
 *     queue.empty();     // return false
 *
 * ─────────────────────────────────────────────────────────────
 * CONSTRAINTS:
 *   - 1 <= x <= 9
 *   - At most 100 calls will be made to push, pop, peek, and empty.
 *   - All calls to pop and peek are valid (queue is non-empty).
 *
 * HINT:
 *   Use one stack for incoming pushes and a second stack for
 *   outgoing pops/peeks. When the "out" stack is empty, transfer
 *   everything from the "in" stack onto it (this reverses order
 *   so the oldest element ends up on top).
 *
 * ─────────────────────────────────────────────────────────────
 */

class MyQueue {
    constructor() {
        // TODO: implement
    }

    push(x) {
        // TODO: implement
    }

    pop() {
        // TODO: implement
    }

    peek() {
        // TODO: implement
    }

    empty() {
        // TODO: implement
    }
}

// Test cases
const queue = new MyQueue();
queue.push(1);
queue.push(2);
console.log(queue.peek());  // Expected: 1
console.log(queue.pop());   // Expected: 1
console.log(queue.empty()); // Expected: false
