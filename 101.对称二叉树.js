/*
 * @Author: your name
 * @Date: 2020-07-19 21:28:23
 * @LastEditTime: 2020-07-19 21:59:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /leetcode/101.对称二叉树.js
 */ 
/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 递归方法
 * @param {TreeNode} root
 * @return {boolean}
 */
// var isSymmetric = function(root) {
//     if(!root) return true;

//     let walk = function(left,right){
//         if(!left && !right) return true
//         if( (!left && right) ||
//             (!right && left) ||
//             left.val !== right.val){
//             return false
//         } 
//         return walk(left.left,right.right) && walk(left.right,right.left)
//     }
//     return walk(root.left,root.right)
    
// };

/**
 * 迭代方法
 * @param {d} root 
 */
var isSymmetric = function(root) {
    let stack = [];
    stack.push(root)
    stack.push(root)

    while(stack.length){
        //每次取出来两个
        let p = stack.shift()
        let q = stack.shift()

        if(!p && !q) {
            
        }else{
            if((!q && p )|| (!p && q) ||( p.val !== q.val)){
                return false;
            }
            stack.push(p.left)
            stack.push(q.right)
            
            stack.push(p.right)
            stack.push(q.left)
        }
    }
    return true
    
};
// @lc code=end

