/*
 * @lc app=leetcode.cn id=234 lang=typescript
 *
 * [234] 回文链表
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

// 暴力：通过数组顺序存储链表，创建头尾双指针一一比较
function isPalindrome(head: ListNode | null): boolean {
  // 存储
  const arr = [head.val]
  while ((head = head.next)) arr.push(head.val)

  // 比较
  let first = 0
  let end = arr.length - 1
  // 循环条件：头指针小于尾指针
  while (first < end) {
    // 有一个值对应不上就不是回文链表了
    if (arr[first] !== arr[end]) return false
    // 我加你减
    first++
    end--
  }

  // 当头指针大于尾指针时，代表遍历该结束了，这确实是个回文链表
  return true
}

// @lc code=end
