/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    if (!intervals || intervals.length < 2) return intervals;
    intervals.sort((a, b) => a[0] - b[0])
    return intervals.reduce((arr, val, index) => {
        let [[lf, rt]] = arr.slice(-1);
        let flag = false;
        if (val[0] >= lf && val[0] <= rt) {
            if (val[1] >= rt) {
                rt = val[1]
            }
            flag = true;//合并
        } else if (val[0] < lf && val[1] <= rt && val[1] >= lf) {
            lf = val[0]
            flag = true;//合并
        } else if (val[0] <= lf && val[1] >= rt) {
            lf = val[0]
            rt = val[1]
            flag = true;//合并
        }
        if (flag) {
            arr.pop()
            arr.push([lf, rt])
        } else {
            arr.push(val)
        }
        return arr;
    }, [intervals.shift()])

};
let intervals = [[1, 3], [2, 6], [8, 10], [15, 18]];
console.log(merge(intervals))
// @lc code=end

