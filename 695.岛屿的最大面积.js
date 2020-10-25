/*
 * @lc app=leetcode.cn id=695 lang=javascript
 *
 * [695] 岛屿的最大面积
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */

//深度优先搜索
function dfs(curI, curJ, grid) {
    if (curI < 0 || curJ < 0 || curJ >= grid[0].length || curI >= grid.length || grid[curI][curJ] === 0) return 0
    grid[curI][curJ] = 0;//不重复访问
    let ans = 1;
    let pos = [[-1, 0], [0, 1], [1, 0], [0, -1]]
    for (let i = 0; i < pos.length; i++) {
        let [dI, dJ] = pos[i]
        ans += dfs(curI + dI, curJ + dJ, grid)
    }
    return ans

}
var maxAreaOfIsland = function (grid) {
    let maxArea = 0;
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
            maxArea = Math.max(dfs(row, col, grid), maxArea)
        }
    }
    console.log(maxArea)
    return maxArea

};
let grid = [[0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
[0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
[0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]];
maxAreaOfIsland(grid)
// @lc code=end

