/*
 * @lc app=leetcode.cn id=19 lang=typescript
 *
 * [19] 删除链表的倒数第 N 个结点
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
  constructor(val: number = 0, next: ListNode | null = null) {
    this.val = val
    this.next = next
  }
}

// 只用快慢指针
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  if (!head) return head

  let fast: ListNode | null = head
  let slow: ListNode | null = head

  while (n--) fast = fast!.next

  while (fast && fast.next) {
    fast = fast.next
    slow = slow!.next
  }

  // 退出循环条件是 fast.next = null
  // 所以如果快指针直接走没了，那需要删除的就是第一个节点
  if (fast === null) return head.next

  // 删除目标节点
  slow!.next = slow!.next!.next

  return head
}

// 快慢双指针 + 虚拟头节点（统一操作，减少特殊情况判断）
// 先让快指针走 n 步，然后让快指针和慢指针一起走，直到快指针的 next 为空
// 此时慢指针位置就是需要删除节点的前一个位置，那怎么删就不用我说了吧？
function removeNthFromEnd1(head: ListNode | null, n: number): ListNode | null {
  if (!head) return head

  const dummyHead = new ListNode(999, head)
  let fast: ListNode | null = dummyHead
  let slow: ListNode | null = dummyHead

  // 快指针走
  while (n) {
    // 变量范围：1 <= n <= 链表节点数量，所以这里 fast.next 不可能为 null
    fast = fast!.next
    n--
  }

  // 手拉手一起走
  while (fast && fast.next) {
    fast = fast.next
    // 这里的慢指针也不可能为 null
    slow = slow!.next
  }

  // 删除倒数 n 个节点
  // 这里就是虚拟头节点的好处了，不需要特殊判断
  // 如果要删的是第一个，那么 slow 就是 dummyHead
  slow!.next = slow!.next!.next

  return dummyHead.next
}
// @lc code=end
