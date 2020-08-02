/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    if (!nums && nums.length == 1) return nums
    let zero = -1;//[0...zero]
    let two = nums.length;//[two...length -1]
    for (let i = 0; i < two;) {
        if (nums[i] === 0) {
            zero++;
            temp = nums[i];
            nums[i] = nums[zero]
            nums[zero] = temp
            i++
        } else if (nums[i] == 1) {
            i++
        } else if (nums[i] == 2) {
            two--
            temp = nums[i];
            nums[i] = nums[two]
            nums[two] = temp
        }
    }
    return nums
};
console.log(sortColors([2, 0, 2, 1, 1, 0]))
console.log(sortColors([2, 0, 2, 1]))
// @lc code=end

