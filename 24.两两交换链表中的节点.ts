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

// TODO: 补充递归版本（看一眼题解都觉得晕 🤡）

// 虚拟头节点：位置在需要交换的两个节点之前，方便一次操作两个节点
function swapPairs(head: ListNode | null): ListNode | null {
  if (!head || head.next === null) return head

  const dummyNode: ListNode | null = new ListNode(999, head)
  let cur = dummyNode

  // 奇数用 cur.next 为 null 终止
  // 偶数用 cur.next.next 为 null 终止
  while (cur.next !== null && cur.next.next !== null) {
    const tmp = cur.next // 1
    const next = cur.next.next.next // 3

    // NOTE: 因为最终返回的是 dummy.next，交换需要保证 dummy.next 为新头，不能乱换
    cur.next = cur.next.next // d->2
    cur.next.next = tmp // d->2->1，注意这里 1->2 是有环的
    cur.next.next.next = next // d->2->1->3

    // 向后移动两位继续交换
    cur = cur.next.next // d=3
  }

  return dummyNode.next
}

// 双指针
function swapPairs1(head: ListNode | null): ListNode | null {
  // 单独处理没有节点或只有一个节点的情况
  if (!head || head.next === null) return head

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
