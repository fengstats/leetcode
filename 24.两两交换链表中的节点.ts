/*
 * @lc app=leetcode.cn id=24 lang=typescript
 *
 * [24] 两两交换链表中的节点
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
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val ?? 0
    this.next = next ?? null
  }
}

// 双指针
function swapPairs(head: ListNode | null): ListNode | null {
  if (!head) return null

  // 单独处理只有一个节点的情况
  if (head.next === null) return head

  // 返回的新头，从第二个节点开始
  const newHead = head.next
  // prev 节点用于修正两两节点之间的连接
  let prev: ListNode | null = null
  // cur 节点用于循环
  let cur: ListNode | null = head

  while (cur && cur.next) {
    // NOTE: 这里需要代入第二次循环数据，第一次是 null 肯定不会执行
    // 第一次循环后 prev = 1、prev.next = 3
    // 我们要修正让 prev.next = 4，也就是 1->4
    if (prev) prev.next = cur.next // 4

    // 临时节点，下下个节点，用于继续循环，因为在更改指向时可能会丢失掉
    const next = cur.next.next // 3
    cur.next.next = cur // 2->1
    // 现在就成了一个环，1->2->1，需要打破
    cur.next = next // 1->3
    // 两两节点的第一个节点
    prev = cur

    // 如果还有可以交换的两个节点，继续循环
    cur = next
  }

  return newHead
}
// @lc code=end
