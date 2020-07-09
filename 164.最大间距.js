/*
 * @Author: your name
 * @Date: 2020-07-07 20:35:18
 * @LastEditTime: 2020-07-07 20:45:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /leetcode/164.最大间距.js
 */ 
/*
 * @lc app=leetcode.cn id=164 lang=javascript
 *
 * [164] 最大间距
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
    let len = nums.length;
    if(len < 2) return 0;
    nums.sort((a,b)=> a - b);
    let max = 0;
    for(let i = 0; i < len - 1; i ++){
        if((nums[i + 1] - nums[i]) > max){
            max = nums[i + 1] - nums[i];
        }
    }
    return max
};
maximumGap([1,3,100])
// @lc code=end

