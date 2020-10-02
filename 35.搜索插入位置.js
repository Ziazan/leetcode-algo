/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    if (nums && !nums.length) return 0
    let low = 0, len = nums.length;
    let high = len - 1;
    let mid = high;

    //特殊处理
    if (nums[high] < target) {
        return len;
    }

    while (low < high) {
        mid = Math.floor((low + high) / 2)
        if (target === nums[mid]) {
            return mid
        } else if (target < nums[mid]) {
            high = mid - 1
        } else if (target > nums[mid]) {
            low = mid + 1
        }
    }
    //此时 high == low
    return target <= nums[low] ? low : low + 1

};
// @lc code=end

