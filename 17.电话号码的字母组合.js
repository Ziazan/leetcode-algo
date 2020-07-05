/*
 * @Author: your name
 * @Date: 2020-07-05 09:22:43
 * @LastEditTime: 2020-07-05 16:52:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /leetcode/17.电话号码的字母组合.js
 */ 
/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let map = ['','','abc','def','ghi','jkl','mno','pqrs','tuv','wxyz'];
    let code = [];
    if(!digits.length) return []

    digits.split('').forEach((value) => {
        if(value && map[value]){
            code.push(map[value])
        }
    })
    let comb = (arr) =>{
        let result = [];
        if(arr.length === 1){
            return arr[0].split('')
        }
        for(let i = 0,il = arr[0].length; i < il; i ++){
            for(let j = 0, jl = arr[1].length;j < jl; j ++){
                result.push(`${arr[0][i]}${arr[1][j]}`)
            }
        }
        arr.splice(0,2,result)
        if(arr.length > 1){
            return comb(arr)
        }else{
            return result
        }
    }
    
    return comb(code)
};
// @lc code=end

