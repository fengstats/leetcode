/*
 * @lc app=leetcode.cn id=237 lang=typescript
 *
 * [237] 删除链表中的节点
 */

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

/**
  Do not return anything, modify it in-place instead.
 */
// 常规思路：遍历后续的节点一一进行替换
function deleteNode(node: ListNode | null): void {
  while (node?.next) {
    // 伪装成下一个节点
    node.val = node.next.val
    // 到了倒数第 2 个节点时，直接截断链表指向为 null
    if (node.next.next === null) node.next = null
    // 继续遍历
    node = node.next
  }
}
// @lc code=end
