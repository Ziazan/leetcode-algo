/*
 * @Author: your name
 * @Date: 2020-07-11 17:13:22
 * @LastEditTime: 2020-07-12 09:22:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /leetcode/85.最大矩形.js
 */ 
/*
 * @lc app=leetcode.cn id=85 lang=javascript
 *
 * [85] 最大矩形
 */

// @lc code=start
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    let result = [],
        reg = new RegExp('1{1,}','ig');
    matrix = matrix.map(item =>{
        let str = item.join(''),
            match = reg.exec(str),
            start,
            end,
            rs = [];
        while(match){
            start = match.index;
            end = start + match[0].length -1;
            rs.push([start,end])
            match = reg.exec(str,end + 1)
        }
        return rs;
    })
    console.log(matrix)
    //递归计算交集
    //n 记录计算了几行
    let maxRect = function(arr , result,n = 1){
        //弹出第一行
        let top = arr.pop();
        //第二行
        let next = arr.pop();
        let start, //交叉的起点
            end,//交叉的终点
            maxWidth  = 1,
            width = 1;
            n ++;
        top.forEach( tt =>{
            next.forEach( nn =>{
                width = Math.min(tt[1],nn[1]) - Math.max(tt[0],nn[0])  + 1;
                if(width > maxWidth){
                    maxWidth = width;
                    start = Math.max(tt[0],nn[0]) 
                    end = Math.min(tt[1],nn[1])
                }
            })
        });
        if(start === undefined || end === undefined){
            width = top[0][1] -  top[0][0] + 1;
            result.push( width * (n - 1))
            if(n < 3){
                let temp = top.concat(next || [])
                //计算当前行的width
                temp.forEach(tt =>{
                    width = tt[1] - tt[0]  + 1;
                    if(width > maxWidth){
                        maxWidth = width;
                    }
                })
                result.push( maxWidth)
                return false
            }else{
                width = top[0][1] -  top[0][0] + 1;
                result.push( width * (n - 1))
            }
        }else{
            if(arr.length > 0){
                arr.push([[start, end]])
                maxRect(arr, result, n++) 
            }else{
                result.push( n * (end - start + 1))
            }
        }
    }
    // arr = [[[0,1],[3,4]],[[2.4]],[[0,4]]]
    while (matrix.length){
        maxRect([].concat(matrix),result)
        matrix.pop()
    }
    console.log(result)
    let max = 0
    let item = result.pop()
    while(item){
        if(item > max){
            max = item
        }
        item = result.pop()
    }
    return max > 0? max : 0;
};
let input = [
    ["1","0","1","0","0"],
    ["1","0","1","1","1"],
    ["1","1","1","1","1"],
    ["1","0","0","1","0"]
  ]
  let input1= [
    ["1","1","1"],
]
let input2 = [
    ["1"],
]
maximalRectangle(input)
// @lc code=end

