/*
 * @lc app=leetcode.cn id=278 lang=javascript
 *
 * [278] 第一个错误的版本
 */

// @lc code=start
/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
        //使用二分查找，缩小范围
        let left = 0,
            right = n, mid = 0;
        while (left <= right) {
            mid = Math.floor((left + right) / 2)
            let isMidBad = isBadVersion(mid);
            if (isMidBad && !isBadVersion(mid - 1)) {
                return mid
            } else if (isMidBad) {
                right = mid - 1;
            } else {
                left = mid + 1
            }
        }
    };
};
// @lc code=end

