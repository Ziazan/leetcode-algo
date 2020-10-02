/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    let result = [];
    result = nums1.filter(value => {
        return nums2.includes(value)
    })

    return [...new Set(result)]
};


// @lc code=end

