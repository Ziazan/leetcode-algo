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
    sum(newArr, nums, nums.length - 1)
    console.log(newArr)
    return newArr;

};
runningSum([3, 1, 2, 10, 1])

function sum(newArr, nums, index) {
    if (index === 0) {
        newArr[0] = nums[0]
        return newArr[0]
    } else {
        newArr[index] = nums[index] + sum(newArr, nums, index - 1)
        return newArr[index]
    }
}
// @lc code=end

