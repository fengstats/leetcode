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

// 通过前节点来操作
function removeElements(head: ListNode | null, val: number): ListNode | null {
  if (!head) return null
  let newHead = null
  let prev: ListNode | null = null

  while (head) {
    // 找出新的头节点
    if (head.val !== val && !newHead) newHead = head

    // 当前节点需要移除，让前一个节点的 next 指向下一个节点
    // NOTE: 需要移除的目标节点不需要记录到 prev 节点
    if (head.val === val && prev) prev.next = head.next
    // 记录当前节点，作为下个节点的前节点
    else prev = head

    head = head.next
  }

  return newHead
}

// 暴力
function removeElements1(head: ListNode | null, val: number): ListNode | null {
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
