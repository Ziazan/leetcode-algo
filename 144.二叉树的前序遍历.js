/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
var preorderTraversal = function (root) {

    let res = [];
    let stack = [root]

    while (stack.length) {
        let node = stack.pop()
        if (node === null) break
        res.push(node.val)
        stack.push(node.right)
        stack.push(node.left)
    }

    return res


};
// @lc code=end

