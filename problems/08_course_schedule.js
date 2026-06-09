/*
 * COURSE SCHEDULE (Cycle Detection in a Directed Graph)
 * Difficulty: Medium
 * ─────────────────────────────────────────────────────────────
 *
 * PROBLEM STATEMENT:
 * There are a total of `numCourses` courses you have to take,
 * labeled from 0 to numCourses - 1.
 *
 * You are given an array `prerequisites` where
 * prerequisites[i] = [a, b] indicates that you must take course b
 * first if you want to take course a.
 *
 * Return true if you can finish all courses, otherwise return false.
 *
 * (This is essentially asking: does the directed graph have a cycle?)
 *
 * ─────────────────────────────────────────────────────────────
 * EXAMPLES:
 *
 * Example 1:
 *   Input:  numCourses = 2, prerequisites = [[1, 0]]
 *   Output: true
 *   Explanation: Take course 0 first, then course 1. No cycle.
 *
 * Example 2:
 *   Input:  numCourses = 2, prerequisites = [[1, 0], [0, 1]]
 *   Output: false
 *   Explanation: Course 0 requires course 1 and vice versa — cycle!
 *
 * Example 3:
 *   Input:  numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]
 *   Output: true
 *
 * ─────────────────────────────────────────────────────────────
 * CONSTRAINTS:
 *   - 1 <= numCourses <= 2000
 *   - 0 <= prerequisites.length <= 5000
 *   - prerequisites[i].length == 2
 *   - 0 <= a, b < numCourses
 *   - All prerequisite pairs are unique.
 *
 * HINT:
 *   Model this as a directed graph. Use DFS with a visited state
 *   (unvisited / visiting / visited) to detect back edges (cycles),
 *   or use topological sort (Kahn's algorithm) with in-degree tracking.
 *
 * ─────────────────────────────────────────────────────────────
 */

function canFinish(numCourses, prerequisites) {
    // TODO: implement
}

// Test cases
console.log(canFinish(2, [[1, 0]]));                          // Expected: true
console.log(canFinish(2, [[1, 0], [0, 1]]));                  // Expected: false
console.log(canFinish(4, [[1,0],[2,0],[3,1],[3,2]]));         // Expected: true
