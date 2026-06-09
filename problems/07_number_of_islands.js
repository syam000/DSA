/*
 * NUMBER OF ISLANDS
 * Difficulty: Medium
 * ─────────────────────────────────────────────────────────────
 *
 * PROBLEM STATEMENT:
 * Given an m x n 2D binary grid `grid` which represents a map of
 * '1's (land) and '0's (water), return the number of islands.
 *
 * An island is surrounded by water and is formed by connecting
 * adjacent lands horizontally or vertically. You may assume all
 * four edges of the grid are surrounded by water.
 *
 * ─────────────────────────────────────────────────────────────
 * EXAMPLES:
 *
 * Example 1:
 *   Input:
 *     grid = [
 *       ["1","1","1","1","0"],
 *       ["1","1","0","1","0"],
 *       ["1","1","0","0","0"],
 *       ["0","0","0","0","0"]
 *     ]
 *   Output: 1
 *
 * Example 2:
 *   Input:
 *     grid = [
 *       ["1","1","0","0","0"],
 *       ["1","1","0","0","0"],
 *       ["0","0","1","0","0"],
 *       ["0","0","0","1","1"]
 *     ]
 *   Output: 3
 *
 * ─────────────────────────────────────────────────────────────
 * CONSTRAINTS:
 *   - m == grid.length
 *   - n == grid[i].length
 *   - 1 <= m, n <= 300
 *   - grid[i][j] is '0' or '1'
 *
 * HINT:
 *   Use DFS or BFS. When you find a '1', flood-fill the entire
 *   connected island to avoid counting it again.
 *
 * ─────────────────────────────────────────────────────────────
 */

function numIslands(grid) {
    // TODO: implement
}

// Test cases
console.log(numIslands([
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
]));  // Expected: 1

console.log(numIslands([
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
]));  // Expected: 3
