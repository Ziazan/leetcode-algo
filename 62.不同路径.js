/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    let pre = new Array(n).fill(1);//上一行
    let cur = new Array(n).fill(1);
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            cur[j] = cur[j - 1] + pre[j]
        }
        pre = [].concat(cur)
    }
    return cur[n - 1]

};
console.log(uniquePaths(3, 2))
console.log(uniquePaths(7, 3))
console.log(uniquePaths(51, 9))
// @lc code=end

