/*
 * @lc app=leetcode.cn id=860 lang=javascript
 *
 * [860] 柠檬水找零
 */

// @lc code=start
/**
 * @param {number[]} bills
 * @return {boolean}
 */
const types = [5, 10, 20];
var lemonadeChange = function (bills) {
    let money = {}
    let income = 0;

    //init
    types.sort(
        (a, b) => b - a
    ).forEach(item => {
        money[item] = 0;
    })

    while (bills.length) {
        income = bills.shift();
        money[income]++
        let change = income - 5;//需要找零
        if (change > 0) {//需要找零
            types.some(item => {
                if (money[item] > 0 &&
                    change >= item) {
                    let count = Math.min(Math.floor(change / item), money[item])
                    change -= (item * count)
                    money[item] -= count
                }
                if (change === 0) {
                    return true
                }
            })
            if (change > 0) {
                return false
            }
        }
    }
    return true
};

console.log(lemonadeChange([5, 5, 10, 10, 20]))
// @lc code=end

