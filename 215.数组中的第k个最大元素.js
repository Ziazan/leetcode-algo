/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    if (!nums || !k) return;
    let arr = nums, len = nums.length
    //排序
    let quick = function (left, right) {
        if (left > right) return
        let pivotIndex = partition(nums, left, right)
        if (len - k < pivotIndex) {
            quick(left, pivotIndex - 1);
        } else {
            quick(pivotIndex + 1, right);
        }
    }
    quick(0, len - 1)
    return nums[len - k]
};
function partition(arr, left, right) {
    let pivot = arr[right];
    let pivotIndex = left;
    for (let i = left; i < right; i++) {
        if (arr[i] < pivot) {
            swap(arr, pivotIndex++, i)
        }
    }
    swap(arr, right, pivotIndex)
    return pivotIndex
}
function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j]
    arr[j] = temp
}

console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4))
// @lc code=end

