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

// 迭代：一次循环搞定
function reverseList(head: ListNode | null): ListNode | null {
  // 上一个的节点
  let prev = null
  // 剩余节点，用于循环
  let remain = head

  while (remain) {
    // 存储原有链表后面的节点不被更改（循环需要）
    const next = remain.next
    // 反转链表（第一个节点进来会被赋值为 null，第二个节点进来会被赋值为第一个节点）
    remain.next = prev
    // 给下个循环节点赋值使用
    prev = remain
    // 继续循环剩余节点
    remain = next
  }

  // 退出循环时链表反转结束，prev 肯定最后一个节点
  return prev
}

// 暴力：先用数组存储所有节点，通过逆向循环遍历从最后一个节点开始
// 将其 next 指向前一个数组元素节点，直到循环结束，取出最后一个节点返回
function reverseList1(head: ListNode | null): ListNode | null {
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
