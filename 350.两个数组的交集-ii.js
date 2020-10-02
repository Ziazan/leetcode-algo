/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    let result = [];
    let num1Map = arr2Map(nums1)
    let num2Map = arr2Map(nums2)
    for (let [key, value] of num1Map.entries()) {
        if (num2Map.has(key)) {
            let min = Math.min(num2Map.get(key), value);//获取次数的最小值
            let repeatArr = new Array(min).fill(key);
            result = result.concat(repeatArr)
        }
    }
    return result
};

function arr2Map(arr) {
    let dp = new Map();
    arr.forEach(value => {
        if (dp.has(value)) {
            dp.set(value, dp.get(value) + 1)
        } else {
            dp.set(value, 1)
        }
    });
    return dp
}
// @lc code=end

