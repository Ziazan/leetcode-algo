/*
 * @lc app=leetcode.cn id=1370 lang=javascript
 *
 * [1370] 上升下降字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var sortString = function (s) {
    let bucket = new Array(26).fill(0);

    let str = "";
    for (let i = 0; i < s.length; i++) {
        bucket[s[i].charCodeAt() - 97]++
    }
    let len = s.length;
    while (len) {
        for (let i = 0; i < 26; i++) {
            if (bucket[i]) {
                str += String.fromCharCode(i + 97)
                bucket[i]--
                len--
            }
        }
        for (let i = 25; i >= 0; i--) {
            if (bucket[i]) {
                str += String.fromCharCode(i + 97)
                bucket[i]--
                len--
            }
        }
    }

    return str
};
// @lc code=end

