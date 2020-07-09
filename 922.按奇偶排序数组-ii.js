/*
 * @Author: your name
 * @Date: 2020-07-07 20:46:18
 * @LastEditTime: 2020-07-07 21:14:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /leetcode/922.按奇偶排序数组-ii.js
 */ 
/*
 * @lc app=leetcode.cn id=922 lang=javascript
 *
 * [922] 按奇偶排序数组 II
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
    for(let i = 0; i < A.length; i ++){
        if(i % 2 !== A[i] % 2){//
            for(let j = i; j < A.length; j ++){
                if(j % 2 !== A[j] % 2 && A[j] % 2 === i % 2){
                    let temp = A[i];
                    A[i] = A[j]
                    A[j] = temp
                }
            }
        }
    }
    return A
};
sortArrayByParityII([648,831,560,986,192,424,997,829,897,843])
// @lc code=end

