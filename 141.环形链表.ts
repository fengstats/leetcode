/*
 * @lc app=leetcode.cn id=141 lang=typescript
 *
 * [141] 环形链表
 */

// @lc code=start

class ListNode {
  val: number
  next: ListNode | null
  constructor(val: number = 0, next: ListNode | null = null) {
    this.val = val
    this.next = next
  }
}

// 快慢双指针：通过设置快慢双指针，初始指向头节点，让快指针走两步，慢指针走一步
// 1. 若不存在环，等到快指针无法再往前走两步时，退出并返回 false
// 2. 存在环，快慢指针会陷入环中的无限次移动，未进入环时，快慢指针每轮移动后的
// 两者距离 +1，进入环后，慢指针到快指针的距离 +1，同时快指针到慢指针的距离 -1
// 此时就变成了追及问题，举个例子，在操场跑步，一个快一个慢，只要一直跑下去，快的总会追上慢的。
function hasCycle(head: ListNode | null): boolean {
  // 边界处理
  if (!head) return false

  let fast: ListNode | null = head
  let slow: ListNode | null = head

  // 循环条件（必须要能让快指针向前走两步）
  while (fast && fast.next) {
    fast = fast.next.next
    // slow = slow.next
    // 重合啦！
    if (fast === slow) return true
  }

  // fast 最终指向 null，说明无环
  return false
}

// 哈希：通过 hashMap 边存储节点边查找当前节点的 next 是否已经存储在 hashMap 中
// 若存在，说明链表中存在环
// 否则，链表无环
function hasCycle1(head: ListNode | null): boolean {
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
