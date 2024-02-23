/*
 * @lc app=leetcode.cn id=82 lang=typescript
 *
 * [82] 删除排序链表中的重复元素 II
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

function deleteDuplicates(head: ListNode | null): ListNode | null {
  // 虚拟头结点
  const dummyHead = new ListNode(999, head)
  // 保存上个不重复的节点，用于删除重复节点回退使用
  let prev: ListNode | null = dummyHead
  let cur: ListNode | null = dummyHead

  while (cur && cur.next) {
    // 当前节点是需要删除的重复节点
    if (cur.val === cur.next.val) {
      // 向后匹配是否还有其他的重复节点
      while (cur.next && cur.val === cur.next.val) {
        cur.next = cur.next.next
      }
      // 匹配结束，更改前节点引用，舍弃此重复节点
      prev.next = cur.next
      cur = prev
    }

    // 保存当前不重复节点
    prev = cur
    // 向后移动
    cur = cur.next
  }

  return dummyHead.next
}

// @lc code=end
