/*
 * @lc app=leetcode.cn id=148 lang=javascript
 *
 * [148] 排序链表
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
 * 数值交换
 * @param {Node}} p 
 * @param {Node} q 
 */
function swap(p,q){
    let val = p.val;
    p.val = q.val;
    q.val = val
}

/**
 * 找到基准元素
 * @param {Node}} begin 
 * @param {Node} end 
 */
function partion(begin,end = null){
    let p = begin;
    let val = begin.val;
    let next = begin.next;
    
    while(next !== end){
        if(next.val < val){//比基准元素小
            p = p.next
            swap(p,next)
        }
        next = next.next;
    }
    swap(p,begin)
    return p
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
    fastSort = function (begin,end = null){
        if(begin !== end){
            let part = partion(begin,end)
            fastSort(begin,part)
            fastSort(part.next, end)
        }
    }
    fastSort(head)
    return head;
};
// @lc code=end

