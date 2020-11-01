/*
 * @lc app=leetcode.cn id=140 lang=javascript
 *
 * [140] 单词拆分 II
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
let backtrack = (s, length, wordSet, index, map) => {
    if (map.has(index)) {
        return map.get(index)
    }
    let wordBreaks = []
    if (index === length) {
        wordBreaks.push([])
    }

    for (let i = index + 1; i <= length; i++) {
        let word = s.substring(index, i)
        if (wordSet.has(word)) {
            let nextWordBreaks = backtrack(s, length, wordSet, i, map)

            for (let nextBreak of nextWordBreaks) {
                wordBreaks.push([word, ...nextBreak])
            }
        }
    }
    map.set(index, wordBreaks)
    return wordBreaks;
}
var wordBreak = function (s, wordDict) {
    let ans = [];
    let map = new Map();
    let wordSet = new Set(wordDict)
    let wordBreaks = backtrack(s, s.length, wordSet, 0, map)
    for (let words of wordBreaks) {
        ans.push(words.join(' '))
    }
    console.log(ans)
    return ans
};

let s = "pineapplepenapple"
let wordDict = ["apple", "pen", "applepen", "pine", "pineapple"]


wordBreak(s, wordDict)
// @lc code=end

