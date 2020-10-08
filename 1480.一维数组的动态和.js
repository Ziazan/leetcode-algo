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
    let i = 1;
    let len = nums.length

    while (i < nums.length) {
        nums[i] += nums[i - 1]
        i++
    }
    console.log(nums)
    return nums

};
runningSum([1, 1, 1, 1, 1])
runningSum([3, 1, 2, 10, 1])
runningSum([1, 2, 3, 4])
// @lc code=end

