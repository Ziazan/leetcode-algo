/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let len = prices.length;
    let count = 0
    for (let i = 0; i < len; i++) {
        for (let j = i; j < len - 1; j++) {
            if (prices[j + 1] > prices[j]) {
                count += prices[j + 1] - prices[j];
                i = j
            } else {
                i = j
                break
            }
        }
    }
    return count
};
// @lc code=end

