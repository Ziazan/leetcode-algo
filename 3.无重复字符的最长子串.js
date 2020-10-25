/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    if (s && s.length === 0) return 0

    let queue = [];
    let maxSubStr = '';

    for (let index = 0; index < s.length; index++) {
        let char = s.substring(index, index + 1)
        let charIdx = queue.findIndex(val => val === char)
        if (~charIdx) {
            let subArr = [...queue]
            queue.splice(0, charIdx + 1);//删除
            if (subArr.length > maxSubStr.length) {
                maxSubStr = subArr.join('')
            }
            queue.push(char)
            console.log('subArr', subArr)

        } else {
            queue.push(char)
            if (queue.length > maxSubStr.length) {
                maxSubStr = queue.join('')
            }
        }
        console.log('maxSubStr', maxSubStr)
        console.log('queue', queue)
    }
    return maxSubStr.length
};

console.log(lengthOfLongestSubstring("au"))
console.log(lengthOfLongestSubstring("abcabcbb"))
console.log(lengthOfLongestSubstring("bbbbb"))
// console.log(lengthOfLongestSubstring("pwwkew"))
console.log(lengthOfLongestSubstring("swkerwwkews"))
console.log(lengthOfLongestSubstring("dvdf"))
// @lc code=end

