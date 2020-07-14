/*
 * @Author: your name
 * @Date: 2020-07-14 22:49:46
 * @LastEditTime: 2020-07-14 23:12:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /leetcode/54.螺旋矩阵.js
 */ 
/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let result = [];
    let map = function(arr,r = []){
        for(let i = 0, len = arr.length; i < len; i ++){
            if(i === 0){//第一行
                r = r.concat(arr[i]);
            }else if(i === len - 1){//最后一行
                r = r.concat(arr[i].reverse())
            }else{
                let temp = arr[i].pop();
                if(temp !== undefined){
                    r.push(temp)
                }
                
            }
        }
        arr.shift();//删除第一行
        arr.pop();//删除第二行

        for(let i = arr.length - 1; i >= 0; i --){
            let temp = arr[i].shift()
            if(temp !== undefined){
                r.push(temp)
            } 
        }
        if(arr.length > 0){
            return map(arr, r)
        }else{
            return r
        }
    }

    return map(matrix, result)
};
let input1 = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
];
console.log(spiralOrder(input1));
console.log(spiralOrder([[1]]));
console.log(spiralOrder([[1],[2],[3],[4],[5],[6],[7],[8],[9],[10]]));
// @lc code=end

