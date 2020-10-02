/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    // 平方根在0～x/2之间
    //不断缩小范围
    //在两数之间，则返回左边的数字 Math.floor
    if (x === 0 || x === 1) return x
    let left = 0;
    let right = Math.floor(x / 2)
    let mid = 0
    while (left < right) {
        mid = Math.floor((left + right) / 2)
        let target = Math.pow(mid, 2);
        if (target === x) {
            return mid
        } else if (target > x) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    return Math.pow(right, 2) <= x ? right : right - 1;
};
// @lc code=end

