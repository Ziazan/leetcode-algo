/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {

    let res = -1;
    if (!nums || nums.length === 0 || (nums.length === 1 && nums[0] !== target)) return res
    console.log(nums)
    let len = nums.length;
    let lf = 0, rt = len - 1
    while (lf < rt) {
        if (nums[lf] === target) return lf
        if (nums[rt] === target) return rt
        if (target > nums[rt]) {
            lf++
        } else if (target < nums[lf]) {
            rt--
        }
    }

    return res

};
let nums = [4, 5, 6, 7, 0, 1, 2], target = 0;
console.log(search(nums, target))
// @lc code=end

