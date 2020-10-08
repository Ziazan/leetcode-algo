/*
 * @lc app=leetcode.cn id=1480 lang=javascript
 *
 * [1480] 一维数组的动态和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
    if (!nums || nums.length < 2) return nums
    let newArr = []
    nums.reduce((pre, next, index) => {
        newArr.push(pre + next);
        return pre + next
    }, 0)
    return newArr;

};
runningSum([3, 1, 2, 10, 1])

// @lc code=end

