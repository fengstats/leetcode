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

class ListNode {
  val: number
  next: ListNode | null
  constructor(val: number = 0, next: ListNode | null = null) {
    this.val = val
    this.next = next
  }
}

// 快慢双指针：快指针每次走 2 步，慢指针每次走 1 步
// 为什么有环一定相遇？
// 有环的话，快指针肯定会先进入环，慢指针后进入，此时肯定是快指针追慢指针的一个过程
// 每次移动 F+2 S+1 可以看作快指针离慢指针更近一步，一定会追上的
// 但是如果是 F+3 S+1 就可能会错过，因为速度差为 2
function detectCycle(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return null

  let fast: ListNode | null = head
  let slow: ListNode | null = head

  while (fast && fast.next) {
    fast = fast.next.next
    slow = slow!.next

    // NOTE: 注意相遇的点可能不是入口节点，需要结合点数学知识来找入口接地那，不太好解释，去看题解！
    // 最终结论：相遇后一个新的节点从头触发，一个节点相遇处出发，重合时就是入口节点
    if (fast == slow) {
      let newHead: ListNode | null = head
      while (newHead !== slow) {
        slow = slow!.next
        newHead = newHead!.next
      }
      return newHead
    }
  }

  // 无环则快指针率先走到 null 直接退出
  return null
}

// 哈希集合：和 141.环形链表 思路一致
function detectCycle1(head: ListNode | null): ListNode | null {
  if (!head) return head

  const hashSet = new Set<ListNode | null>([head])
  while (head) {
    // 下个节点存在，说明有环，而且是环的入口节点
    if (hashSet.has(head.next)) return head.next
    hashSet.add(head)
    head = head.next
  }

  return null
}
// @lc code=end
