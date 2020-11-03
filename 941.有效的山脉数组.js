/*
 * @lc app=leetcode.cn id=941 lang=javascript
 *
 * [941] 有效的山脉数组
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function (A) {
    if (!A || A.length < 3) return false;
    const len = A.length;
    let j = len - 1, i = 0
    for (; j > i;) {
        if (A[i] >= A[i + 1]) {
            if (A[j] >= A[j - 1]) return false
            j--
        } else {
            i++
        }

    }

    return (j < len - 1 && i > 0) ? true : false
};
// @lc code=end

