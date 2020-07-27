/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    if (!prices || !prices.length) return 0
    let len = prices.length;
    let valley = 0
    let peak = 0;
    let i = 0
    while (i < len) {
        if (prices[i] < prices[valley]) {
            valley = i
            if (valley > peak) {
                peak = valley
            }
        }
        if (prices[i] > prices[peak]) {
            peak = i
        }
        i++;
    }
    return prices[peak] - prices[valley];
};
// @lc code=end

