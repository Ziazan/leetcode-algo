/*
 * @Author: your name
 * @Date: 2020-07-06 21:24:30
 * @LastEditTime: 2020-07-06 21:31:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /leetcode/459.重复的子字符串.js
 */ 
/*
 * @lc app=leetcode.cn id=459 lang=javascript
 *
 * [459] 重复的子字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    return /^(\w+)\1+$/g.test(s)
};
console.log(repeatedSubstringPattern("abab"))//true
console.log(repeatedSubstringPattern("aba"))//false
console.log(repeatedSubstringPattern("ababba"))//false
console.log(repeatedSubstringPattern("abcabcabcabc"))//true
// @lc code=end

