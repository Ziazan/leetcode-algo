/*
 * @Author: your name
 * @Date: 2020-07-09 20:48:45
 * @LastEditTime: 2020-07-09 21:37:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /leetcode/93.复原ip地址.js
 */ 
/*
 * @lc app=leetcode.cn id=93 lang=javascript
 *
 * [93] 复原IP地址
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    let ipArr = [];
    let search = function(cur,sub){
        // if(sub.length > 12) return;
        if(sub.length > (4 - cur.length) * 3) return;
        if(cur.length === 4 && cur.join('') === s){
            ipArr.push(cur.join('.'))
        }else{
            // 正常的处理过程
            for (let i = 0, len = Math.min(3, sub.length), tmp; i < len; i++) {
                tmp = sub.substr(0, i + 1)
                if (tmp - 256 < 0) {
                    // 转换下数据类型，如 01为1（LeetCode测试用例）
                    search(cur.concat([tmp * 1]), sub.substr(i + 1))
                }
            }
        }
    }
    search([],s)
    return ipArr;
};
restoreIpAddresses("25525511135")
// @lc code=end

