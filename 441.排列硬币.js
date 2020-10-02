/*
 * @lc app=leetcode.cn id=441 lang=javascript
 *
 * [441] 排列硬币
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
    if (n === 0 || n === 1) return n
    let left = 1, right = n, mid = 0;
    while (left <= right) {
        mid = Math.floor((right + left) / 2);
        let n2 = Math.floor((mid + 1) * mid / 2)
        if (n2 === n) {
            return mid
        } else if (n2 > n) {
            right = mid - 1;
        } else {
            left = mid + 1
        }
    }
    return right
};
// @lc code=end

