# DSA

Playground for popular DSA problems

> **Note:** Claude AI is only used for validating solutions and adding documentation — all problem-solving is done independently.

---

## JS Basics
- [basics.js](./basics.js)

---

## Problem List

### Arrays & Strings
- [x] [Two Sum](./problems/01_two_sum.js) — One-pass hashmap. Store `target - num` → index as you iterate; check if current num is already a stored complement. O(n) time, O(n) space.
- [x] [Maximum Subarray (Kadane's)](./problems/02_maximum_subarray.js) — Track running sum ending at current index (extend or restart) and a separate best-so-far max. O(n) time, O(1) space.
- [x] [Longest Substring Without Repeating Characters](./problems/03_longest_substring.js) — Sliding window with a Set; shrink from the left on duplicates, track the max window size. O(n) amortized time, O(min(n, charset)) space. (Includes an alternative Map-based implementation.)
- [ ] [Trapping Rain Water](./problems/04_trapping_rain_water.js)
- [ ] [Contains Duplicate](./problems/14_contains_duplicate.js)
- [ ] [Best Time to Buy and Sell Stock](./problems/16_best_time_to_buy_sell_stock.js)
- [ ] [Move Zeroes](./problems/17_move_zeroes.js)
- [ ] [Product of Array Except Self](./problems/22_product_of_array_except_self.js)

### Hashing & Sets
- [ ] [Valid Anagram](./problems/13_valid_anagram.js)
- [ ] [First Unique Character in a String](./problems/18_first_unique_character.js)
- [ ] [Group Anagrams](./problems/20_group_anagrams.js)
- [ ] [Top K Frequent Elements](./problems/21_top_k_frequent_elements.js)

### Stacks & Queues
- [ ] [Valid Parentheses](./problems/15_valid_parentheses.js)
- [ ] [Implement Queue using Stacks](./problems/19_queue_using_stacks.js)
- [ ] [Min Stack](./problems/23_min_stack.js)
- [ ] [Daily Temperatures](./problems/24_daily_temperatures.js)

### Linked Lists
- [ ] [LRU Cache](./problems/05_lru_cache.js)

### Trees & Graphs
- [ ] [Binary Tree Level Order Traversal (BFS)](./problems/06_binary_tree_bfs.js)
- [ ] [Number of Islands](./problems/07_number_of_islands.js)
- [ ] [Course Schedule (Cycle Detection in DAG)](./problems/08_course_schedule.js)

### Dynamic Programming
- [ ] [Coin Change](./problems/09_coin_change.js)
- [ ] [Longest Common Subsequence](./problems/10_longest_common_subsequence.js)

### Sorting & Searching
- [ ] [Kth Largest Element (QuickSelect)](./problems/11_kth_largest_element.js)

### Recursion & Backtracking
- [ ] [Subsets](./problems/12_subsets.js)

---

## Progress

| Status | Count |
|--------|-------|
| Done   | 3     |
| Total  | 24    |
