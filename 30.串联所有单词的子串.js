/*
 * @Author: your name
 * @Date: 2020-07-09 21:40:45
 * @LastEditTime: 2020-07-09 22:34:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /leetcode/30.串联所有单词的子串.js
 */ 
/*
 * @lc app=leetcode.cn id=30 lang=javascript
 *
 * [30] 串联所有单词的子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */

//WORING
var findSubstring = function(s, words) {
    if(!s || !words ||
        (s && s.length === 0) || (words && words.length === 0)) return []
    //找出words的所有排列组合
    let arr = [],wlen = words.length,pos = []
    let group = function(cur,sub){
        if(cur.length == wlen){
            arr.push(cur.join(''));
        }else{
            sub.forEach((item,idx)=>{
                let tmp = [].concat(sub);
                tmp.splice(idx,1)
                group(cur.concat(item), tmp)
            })
        }
    }
    group([],words)
    console.log(arr)
    arr.map(fullstr =>{
        let idx = s.indexOf(fullstr);
        while(idx !== -1){
            if(!pos.includes(idx)) pos.push(idx)
            idx = s.indexOf(fullstr,idx + 1);
        }
    })
    return pos
};
console.log(findSubstring("",[]))
console.log(findSubstring("barfoothefoobarman",["foo","bar"]))
console.log(findSubstring("wordgoodgoodgoodbestword",["word","good","best","word"]))//[]
console.log(findSubstring("wordgoodgoodgoodbestword",["word","good","best","good"]))//[8]
// @lc code=end

