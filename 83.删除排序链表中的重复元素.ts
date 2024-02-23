/*
 * @lc app=leetcode.cn id=83 lang=typescript
 *
 * [83] 删除排序链表中的重复元素
 */

// @lc code=start

// class ListNode {
//   val: number
//   next: ListNode | null
//   constructor(val: number = 0, next: ListNode | null = null) {
//     this.val = val
//     this.next = next
//   }
// }

// 由于题目提到 “已排序” 链表特性，因此重复元素在链表中出现的位置也是连续的，一次遍历根据更改不重复节点指向即可删除掉重复元素
function deleteDuplicates(head: ListNode | null): ListNode | null {
  let cur: ListNode | null = head
  while (cur) {
    // while 循环直到找到不重复元素节点再移动指向
    while (cur.next && cur.val === cur.next.val) {
      cur.next = cur.next.next
    }
    cur = cur.next
  }

  return head
}

// 内部使用 if else
function deleteDuplicates1(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head

  let cur: ListNode | null = head
  while (cur) {
    if (cur.next && cur.val === cur.next.val) {
      cur.next = cur.next.next
    } else {
      cur = cur.next
    }
  }

  return head
}

// @lc code=end
