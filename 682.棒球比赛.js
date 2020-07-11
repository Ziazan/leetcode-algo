/*
 * @Author: your name
 * @Date: 2020-07-11 16:45:06
 * @LastEditTime: 2020-07-11 17:06:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /leetcode/682.棒球比赛.js
 */ 
/*
 * @lc app=leetcode.cn id=682 lang=javascript
 *
 * [682] 棒球比赛
 */

// @lc code=start
/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
    if(! (ops && ops.length)) return 0
    let stack = [];
    while(ops.length){
        let score = ops.shift()
        if(Number.isInteger(+score)){
            stack.push(+score)
        }else if("C" === score){//最后一个有效 回合的分数是无效的
            stack.pop()
        }else if("D" === score ){//表示本轮获得的得分是前一轮有效 回合得分的两倍。
            if(stack.length){
                stack.push(stack[stack.length - 1] * 2)
            }
        }else if("+" === score){
            if(stack.length){
                stack.push(stack[stack.length - 1] + (stack[stack.length - 2] || 0))
            }
        }else{
            console.log('error score')
        }
    }
    console.log(stack)
    return stack.reduce((sum,item) => sum + item,0)
};
// calPoints(["5","2","C","D","+"])
calPoints(["5","-2","4","C","D","9","+","+"])
// @lc code=end

