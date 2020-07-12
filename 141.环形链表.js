/*
 * @Author: your name
 * @Date: 2020-07-12 18:46:55
 * @LastEditTime: 2020-07-12 19:27:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /leetcode/141.环形链表.js
 */ 
/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let slow = fast = head;
    while(fast && fast.next){
        if(fast.next === slow){
            return true
         }
        fast = fast.next.next;
        slow = slow.next
    }
    return false
};
//[3,2,0,-4]\n-1
//[3,2,0,-4]\n0
//[1]\n0
//[1,2]\n0
// @lc code=end

