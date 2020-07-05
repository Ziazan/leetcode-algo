/*
 * @Author: your name
 * @Date: 2020-07-05 09:10:49
 * @LastEditTime: 2020-07-05 09:21:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /leetcode/557.反转字符串中的单词-iii.js
 */ 
/*
 * @lc app=leetcode.cn id=557 lang=javascript
 *
 * [557] 反转字符串中的单词 III
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    return s.split(' ').map((value)=>{
        return value.split('').reverse().join('')
    }).join(' ')
};
// var reverseWords = function(s) {
//     return s.split(/\s/g).map((value)=>{
//         return value.split('').reverse().join('')
//     }).join(' ')
// };
// var reverseWords = function(s) {
//     return s.match(/[\w']+/g).map((value)=>{
//         return value.split('').reverse().join('')
//     }).join(' ')
// };
// @lc code=end

