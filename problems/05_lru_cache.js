/*
 * LRU CACHE
 * Difficulty: Medium
 * ─────────────────────────────────────────────────────────────
 *
 * PROBLEM STATEMENT:
 * Design a data structure that follows the constraints of a
 * Least Recently Used (LRU) cache.
 *
 * Implement the `LRUCache` class:
 *   - LRUCache(capacity)  — Initialize the LRU cache with a positive
 *                           size `capacity`.
 *   - get(key)            — Return the value of the key if it exists,
 *                           otherwise return -1.
 *   - put(key, value)     — Update or insert the key-value pair.
 *                           If the number of keys exceeds capacity,
 *                           evict the least recently used key.
 *
 * Both get and put must run in O(1) average time complexity.
 *
 * ─────────────────────────────────────────────────────────────
 * EXAMPLE:
 *
 *   Input:
 *     ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
 *     [[2],        [1,1], [2,2], [1],   [3,3], [2],   [4,4], [1],   [3],   [4]]
 *
 *   Output:
 *     [null, null, null, 1, null, -1, null, -1, 3, 4]
 *
 *   Explanation:
 *     LRUCache cache = new LRUCache(2);  // capacity = 2
 *     cache.put(1, 1);  // cache: {1=1}
 *     cache.put(2, 2);  // cache: {1=1, 2=2}
 *     cache.get(1);     // return 1,  cache: {2=2, 1=1} (1 is now most recent)
 *     cache.put(3, 3);  // evicts key 2, cache: {1=1, 3=3}
 *     cache.get(2);     // return -1 (not found)
 *     cache.put(4, 4);  // evicts key 1, cache: {3=3, 4=4}
 *     cache.get(1);     // return -1 (not found)
 *     cache.get(3);     // return 3
 *     cache.get(4);     // return 4
 *
 * ─────────────────────────────────────────────────────────────
 * CONSTRAINTS:
 *   - 1 <= capacity <= 3000
 *   - 0 <= key <= 10^4
 *   - 0 <= value <= 10^5
 *   - At most 2 * 10^5 calls will be made to get and put.
 *
 * HINT:
 *   Use a combination of a HashMap and a Doubly Linked List
 *   to achieve O(1) for both operations.
 *
 * ─────────────────────────────────────────────────────────────
 */

class LRUCache {
    constructor(capacity) {
        // TODO: implement
    }

    get(key) {
        // TODO: implement
    }

    put(key, value) {
        // TODO: implement
    }
}

// Test cases
const cache = new LRUCache(2);
cache.put(1, 1);
cache.put(2, 2);
console.log(cache.get(1));    // Expected: 1
cache.put(3, 3);
console.log(cache.get(2));    // Expected: -1
cache.put(4, 4);
console.log(cache.get(1));    // Expected: -1
console.log(cache.get(3));    // Expected: 3
console.log(cache.get(4));    // Expected: 4
