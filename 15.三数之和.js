/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function sumArr(arr) {
    return arr.reduce((sum, val) => sum + val, 0)
}

var threeSum = function (nums) {
    let res = [];
    if (!nums) return res
    if (nums.length < 3) return res

    nums.sort((a, b) => a - b)

    let len = nums.length;

    if (nums[len - 1] < 0) return res

    for (let i = 0; i < len - 1; i++) {
        if (nums[i] > 0) break;
        if (i > 0 && nums[i] === nums[i - 1]) continue
        let lf = i + 1
        let rt = len - 1

        while (lf < rt) {
            let sum = nums[i] + nums[lf] + nums[rt];
            if (sum === 0) {
                res.push([nums[i], nums[lf], nums[rt]])
                while (lf < rt && nums[lf] === nums[lf + 1]) { lf++ }
                while (lf < rt && nums[rt] === nums[rt - 1]) { rt-- }
                lf++;
                rt--;
            } else if (sum < 0) {
                lf++
            } else if (sum > 0) {
                rt--;
            }
        }
    }

    return res
};

// @lc code=end

