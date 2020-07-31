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
    let minPrice = Infinity;
    let maxCount = 0;
    let i = 0
    while (i < prices.length) {
        if (prices[i] < minPrice) {
            minPrice = prices[i]
        }
        if (prices[i] - minPrice > maxCount) {
            maxCount = prices[i] - minPrice
        }
        i++;
    }
    return maxCount;
};
console.log(maxProfit([7, 6, 4, 3, 1]))
console.log(maxProfit([2, 4, 1]))
// @lc code=end

