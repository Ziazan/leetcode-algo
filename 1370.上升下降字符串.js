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
    //排序
    //最小，不等 存入，删除
    let sArr = s.split('').sort((a, b) => a.charCodeAt() - b.charCodeAt())
    let newStr = "";
    console.log(sArr)
    while (sArr.length) {
        //正
        newStr += sArr[0];
        sArr.splice(0, 1)
        for (let i = 0; i < sArr.length; i++) {
            let last = newStr[newStr.length - 1]//字符串最后一个字母
            if (sArr[i] !== last && sArr[i].charCodeAt() > last.charCodeAt()) {
                newStr += sArr.splice(i, 1).join('');
                i = i - 1
            }
        }
        //逆
        newStr += sArr[sArr.length - 1] || "";
        sArr.splice(sArr.length - 1, 1)
        for (let i = sArr.length - 1; i >= 0; i--) {
            let last = newStr[newStr.length - 1]
            if (sArr[i] !== last && sArr[i].charCodeAt() < last.charCodeAt()) {
                newStr += sArr.splice(i, 1).join('');
            }
        }

    }
    return newStr
};

// @lc code=end

