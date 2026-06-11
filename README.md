# DSA

Playground for popular DSA problems

> **Note:** Claude AI is only used for validating solutions and adding documentation — all problem-solving is done independently.

---

## JS Basics
- [basics.js](./basics.js)

---

## Problem List

Ordered as a learning path: easy warmups first, then medium array/hashmap/stack
problems, then medium problems across other data structures, and finally the
hard problem.

### Easy — Warmups
- [x] [Two Sum](./problems/01_two_sum.js) — One-pass hashmap. Store `target - num` → index as you iterate; check if current num is already a stored complement. O(n) time, O(n) space.
- [ ] [Valid Anagram](./problems/02_valid_anagram.js)
- [ ] [Contains Duplicate](./problems/03_contains_duplicate.js)
- [ ] [Valid Parentheses](./problems/04_valid_parentheses.js)
- [ ] [Best Time to Buy and Sell Stock](./problems/05_best_time_to_buy_sell_stock.js)
- [ ] [Move Zeroes](./problems/06_move_zeroes.js)
- [ ] [First Unique Character in a String](./problems/07_first_unique_character.js)
- [ ] [Implement Queue using Stacks](./problems/08_queue_using_stacks.js)

### Medium — Arrays, Hashmaps & Stacks
- [x] [Maximum Subarray (Kadane's)](./problems/09_maximum_subarray.js) — Track running sum ending at current index (extend or restart) and a separate best-so-far max. O(n) time, O(1) space.
- [x] [Longest Substring Without Repeating Characters](./problems/10_longest_substring.js) — Sliding window with a Set; shrink from the left on duplicates, track the max window size. O(n) amortized time, O(min(n, charset)) space. (Includes an alternative Map-based implementation.)
- [ ] [Group Anagrams](./problems/11_group_anagrams.js)
- [ ] [Top K Frequent Elements](./problems/12_top_k_frequent_elements.js)
- [ ] [Product of Array Except Self](./problems/13_product_of_array_except_self.js)
- [ ] [Min Stack](./problems/14_min_stack.js)
- [ ] [Daily Temperatures](./problems/15_daily_temperatures.js)

### Medium — Linked Lists, Trees, DP, Sorting & Recursion
- [ ] [LRU Cache](./problems/16_lru_cache.js)
- [ ] [Binary Tree Level Order Traversal (BFS)](./problems/17_binary_tree_bfs.js)
- [ ] [Number of Islands](./problems/18_number_of_islands.js)
- [ ] [Course Schedule (Cycle Detection in DAG)](./problems/19_course_schedule.js)
- [ ] [Coin Change](./problems/20_coin_change.js)
- [ ] [Longest Common Subsequence](./problems/21_longest_common_subsequence.js)
- [ ] [Kth Largest Element (QuickSelect)](./problems/22_kth_largest_element.js)
- [ ] [Subsets](./problems/23_subsets.js)

### Hard
- [ ] [Trapping Rain Water](./problems/24_trapping_rain_water.js)

---

## Progress

| Status | Count |
|--------|-------|
| Done   | 3     |
| Total  | 24    |
