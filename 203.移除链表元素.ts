/*
 * @lc app=leetcode.cn id=203 lang=typescript
 *
 * [203] 移除链表元素
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

// 暴力
function removeElements(head: ListNode | null, val: number): ListNode | null {
  if (!head) return null

  // 存储移除目标节点后的节点列表
  const nodeArr: ListNode[] = []
  while (head) {
    if (head.val !== val) nodeArr.push(head)
    head = head.next
  }

  // 按照顺序更改指向
  for (let i = 0; i < nodeArr.length; i++) {
    nodeArr[i].next = nodeArr[i + 1] ?? null
  }

  // 返回新的头节点
  return nodeArr[0] ?? null
}
// @lc code=end
