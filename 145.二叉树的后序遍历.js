/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
    let stack = [root], res = [];

    while (stack.length) {
        let node = stack.pop()
        node && res.push(node.val)
        cur.left && stack.push(cur.left)
        cur.right && stack.push(cur.right)
    }
    res.reverse()
    return res
};
// @lc code=end

