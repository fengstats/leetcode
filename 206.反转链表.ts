/*
 * @lc app=leetcode.cn id=206 lang=typescript
 *
 * [206] 反转链表
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

// 暴力：先用数组存储所有节点，通过逆向循环遍历从最后一个节点开始
// 将其 next 指向前一个数组元素节点，直到循环结束，取出最后一个节点返回
function reverseList(head: ListNode | null): ListNode | null {
  if (!head) return null

  // 存储
  const arr = <any>[head]
  while ((head = head.next)) arr.push(head)

  // 更改指向
  const lastIndex = arr.length - 1
  for (let i = lastIndex; i >= 0; --i) {
    arr[i].next = arr[i - 1] || null
  }

  return arr[lastIndex]
}
// @lc code=end
