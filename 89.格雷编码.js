/*
 * @Author: your name
 * @Date: 2020-07-06 20:50:04
 * @LastEditTime: 2020-07-06 21:18:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /leetcode/89.格雷编码.js
 */ 
/*
 * @lc app=leetcode.cn id=89 lang=javascript
 *
 * [89] 格雷编码
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(num) {
    let binaryCode = function(n){
        if(n === 0){
            return [0]
        }else if(n === 1) {
            return [0, 1];
        }else{
            let len = Math.pow(2,n)
            let arr = Array.from({length:len})
            let preArr = binaryCode(n - 1);
            for(let i = 0; i < len/2; i ++){
                arr[i] = `0${preArr[i]}`
                arr[len - 1 - i] = `1${preArr[i]}`
            }
            return arr;
        }
    }
    let binaryCodeArr = binaryCode(num)
    // console.log(binaryCodeArr)
    return binaryCodeArr.map(item => parseInt(item,2))
};
grayCode(2)
grayCode(0)
grayCode(3)
// @lc code=end

