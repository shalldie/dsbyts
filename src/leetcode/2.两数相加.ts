/*
 * @lc app=leetcode.cn id=2 lang=typescript
 *
 * [2] 两数相加
 */
export {};

class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null, left = 0): ListNode | null {
    let sum = (l1?.val || 0) + (l2?.val || 0) + left;

    left = ~~(sum / 10);
    sum = sum % 10;

    const nextNode = l1?.next || l2?.next || left ? addTwoNumbers(l1?.next || null, l2?.next || null, left) : null;
    return new ListNode(sum, nextNode);
}
// @lc code=end
