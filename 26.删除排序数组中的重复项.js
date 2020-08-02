/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    if (!nums || nums.length == 1) return nums

    let len = nums.length, lastDiffFindAt = 0;
    for (let i = 0; i < len - 1; i++) {
        if (nums[i] !== nums[i + 1]) {
            lastDiffFindAt++;
            nums[lastDiffFindAt] = nums[i + 1];
        }
    }
    nums.length = lastDiffFindAt + 1;
    return nums.length.length
};
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))
console.log(removeDuplicates([1, 1, 2, 3, 4, 4]))
// @lc code=end

