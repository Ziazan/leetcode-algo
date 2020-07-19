/*
 * @Author: your name
 * @Date: 2020-07-17 11:17:42
 * @LastEditTime: 2020-07-17 13:01:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /leetcode/48.旋转图像.js
 */ 
/*
 * @lc app=leetcode.cn id=48 lang=javascript
 *
 * [48] 旋转图像
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let x = 0 ;
    let y = matrix.length - 1
    while(x < y){
        let add = 0
        while(add < y - x){
            //每个角角开始移动
            temp = matrix[y - add][x];
            matrix[y - add][x] = matrix[y][y - add]
            matrix[y][y - add] = matrix[x + add][y]
            matrix[x + add][y] = matrix[x][x + add]
            matrix[x][x + add] = temp;
            add ++;
        }
        //收缩一层
        x ++;
        y --;
    }
    return matrix;
   
};
let matrix = 
[
  [1,2,3,10],
  [4,5,6,11],
  [7,8,9,12]
]
console.log(rotate(matrix))

// @lc code=end

