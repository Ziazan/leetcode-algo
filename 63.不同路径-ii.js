/*
 * @lc app=leetcode.cn id=63 lang=javascript
 *
 * [63] 不同路径 II
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
    let grid = obstacleGrid;
    let m = obstacleGrid.length;
    let n = obstacleGrid[0].length;
    let cur = new Array(n).fill(0)

    cur[0] = grid[0][0] === 0 ? 1 : 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] == 1) {
                cur[j] = 0
                continue;
            } else if (j - 1 >= 0 && grid[i][j - 1] == 0) {
                cur[j] += cur[j - 1]
            }
        }
    }
    return cur[n - 1]
};

let qube = [
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0]
];
console.log(uniquePathsWithObstacles(qube))
// @lc code=end

