/*
 * @Author: your name
 * @Date: 2020-07-05 23:08:23
 * @LastEditTime: 2020-07-06 20:48:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /leetcode/914.卡牌分组.js
 */ 
/*
 * @lc app=leetcode.cn id=914 lang=javascript
 *
 * [914] 卡牌分组
 */

// @lc code=start
/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
    let arr = deck.sort((a,b) => a - b)
    let temp = [],lenArr = [];
    //所有牌的长度
    for(let i = 0, il = arr.length; i < il ;i ++){
        if(i === 0){
            temp.push(arr[i]);
        }else if(arr[i] === temp[0]){
            temp.push(arr[i]);
        }else{
            lenArr.push(temp.length)
            temp.length = 0;
            temp.push(arr[i]);
        }
    }
    lenArr.push(temp.length)
     //1.排序
     let gcb = function(a,b){
        if(a < b){
            [a,b] = [b,a]
        }
        if(b === 0 ){
            return a
        }
        return gcb(b, a % b)
    }
    let gcbData = lenArr.reduce((num, cur,index)=>{
        return gcb(num,cur)
    },lenArr[0])
    return gcbData > 1
};
console.log(hasGroupsSizeX([1,1,2,2,2,2]))//true
console.log(hasGroupsSizeX([1,1,1,2,2,2,3,3]))//false
console.log(hasGroupsSizeX([1]))//false
console.log(hasGroupsSizeX([1,1,1,1,2,2,2,2,2,2])) //true
console.log(hasGroupsSizeX([1,1,1,1,1,1,
    2,2,2,2,2,2,2,2,2,
    3,3,3,3,3,3,3,3])) //false
console.log(hasGroupsSizeX([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,
    3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,
    5,5,5,6,6,6,
    7,7,7
    ,8,8,8,8,8,8,
    9,9,9,
    10,10,10])) //true

// @lc code=end

