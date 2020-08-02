/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    if (!nums) return nums

    let count = 0, len = nums.length

    for (let i = 0; i < len; i++) {
        if (nums[i] == 0 && i < len - count) {
            count++;
            nums.splice(i, 1)
            i = -1
        } else if (count > 0 && i >= len - count) {
            nums.push(0)
            count--

        }
    }
    console.log('nums', nums)

    return nums
};

console.log(moveZeroes([0, 1, 0, 3, 12]))
console.log(moveZeroes([0, 0, 1]))
// @lc code=end

