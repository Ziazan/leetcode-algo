/*
 * @lc app=leetcode.cn id=367 lang=javascript
 *
 * [367] 有效的完全平方数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
    let left = 1, right = Math.ceil(num / 2), mid;
    while (left <= right) {
        mid = Math.floor((right + left) / 2);
        let result = mid * mid;
        if (result === num) {
            return true
        } else if (result > num) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    return false
};
// @lc code=end

