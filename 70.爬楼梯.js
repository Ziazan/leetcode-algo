/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    let q = 0, p = 0, r = 1;
    for (let i = 1; i <= n; i++) {
        p = q;
        q = r;
        r = p + q;
    }
    return r
};
console.log(climbStairs(2));
console.log(climbStairs(3));
// @lc code=end

