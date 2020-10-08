/*
 * @lc app=leetcode.cn id=1137 lang=javascript
 *
 * [1137] 第 N 个泰波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
    const map = [0, 1, 1];

    const recursion = (n) => {
        if (map[n] !== undefined) {
            return map[n]
        }
        map[n] = recursion(n - 1) + recursion(n - 2) + recursion(n - 3);
        return map[n]
    }
    return recursion(n)
};
// @lc code=end

