/*
 * @lc app=leetcode.cn id=1491 lang=javascript
 *
 * [1491] 去掉最低工资和最高工资后的工资平均值
 */

// @lc code=start
/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function (salary) {

    salary = quickSort(salary)

    salary.pop()
    salary.shift()

    let len = salary.length;
    let sum = salary.reduce((a, b) => a + b, 0)
    return (sum / len).toFixed(4)
};

function quickSort(arr) {
    if (arr.length < 2) return arr;
    let pivot = arr[0], sm = [], lg = [];
    for (let index = 1; index < arr.length; index++) {
        if (arr[index] < pivot) {
            sm.push(arr[index])
        } else {
            lg.push(arr[index])
        }
    }
    return [...quickSort(sm), pivot, ...quickSort(lg)]
}

// console.log(average([4000, 3000, 1000, 2000])) // 2500.00000
// console.log(average([8000, 9000, 2000, 3000, 6000, 1000]))// 4750.00000
// console.log(average([1000, 2000, 3000]))// [4000,3000,1000,2000]

// @lc code=end

