/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    if (!numbers || numbers.length < 2) return []
    let len = numbers.length
    if (numbers[len - 1] * 2 < target) return []
    for (let i = 0; i <= len - 1; i++) {
        let right = binarySearch(numbers, target - numbers[i], i + 1)
        if (~right) {
            return [i + 1, right + 1]
        }
    }
    return []
};

function binarySearch(numbers, target, start) {
    let left = start, len = numbers.length
    let right = len - 1;
    let mid = 0
    while (left <= right) {
        mid = Math.floor((left + right) / 2)
        if (numbers[mid] === target) {
            return mid
        } else if (numbers[mid] > target) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    return -1
}
// @lc code=end