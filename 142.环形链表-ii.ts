/*
 * @lc app=leetcode.cn id=142 lang=typescript
 *
 * [142] 环形链表 II
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

// 哈希集合：和 141.环形链表 思路一致
function detectCycle(head: ListNode | null): ListNode | null {
  // 边界
  if (!head) return head

  const hashSet = new Set<ListNode>([head])
  while ((head = head.next)) {
    if (hashSet.has(head.next)) return head.next
    hashSet.add(head)
  }

  return null
}
// @lc code=end
