/*
 * @Author: your name
 * @Date: 2020-07-05 16:54:45
 * @LastEditTime: 2020-07-05 23:03:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /leetcode/605.种花问题.js
 */ 
/*
 * @lc app=leetcode.cn id=605 lang=javascript
 *
 * [605] 种花问题
 */

// @lc code=start
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let arr = flowerbed,count = 0;
    for(let cur = 0,next = pre = 0,len = arr.length; cur < len;  cur ++){
        pre = Math.max(cur - 1, 0);
        next = Math.min(cur + 1, len - 1);

        if(!(arr[cur] || arr[pre] || arr[next])){
            arr[cur] = 1;
            count ++ ;
        }
    }
    
    return count >= n
};
// @lc code=end

