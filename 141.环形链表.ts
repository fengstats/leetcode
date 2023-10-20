/*
 * @lc app=leetcode.cn id=141 lang=typescript
 *
 * [141] 环形链表
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

// 哈希：通过 hashMap 边存储节点边查找当前节点的 next 是否已经存储在 hashMap 中
// 若存在，说明链表中存在环
// 否则，链表无环
function hasCycle(head: ListNode | null): boolean {
  // 边界处理
  if (!head) return false

  const headSet = new Set([head])

  while ((head = head.next)) {
    if (headSet.has(head.next)) return true
    headSet.add(head)
  }

  return false
}
// @lc code=end
