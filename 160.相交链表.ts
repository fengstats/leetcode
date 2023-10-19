/*
 * @lc app=leetcode.cn id=160 lang=typescript
 *
 * [160] 相交链表
 */

// @lc code=start

// Definition for singly-linked list.
// class ListNode {
//   val: number
//   next: ListNode | null
//   constructor(val?: number, next?: ListNode | null) {
//     this.val = val === undefined ? 0 : val
//     this.next = next === undefined ? null : next
//   }
// }

// 暴力：链表 headA 所有节点和链表 headB 中的所有节点做比较
function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  // 临时链表存储（虽然题目没说不能污染原链表数据，但想了想还是别污染好了）
  let pA = headA
  while (pA) {
    // 在这里创建临时 headB 是因为后面还需要比较 headA 中的其他节点
    // 每次都是一个全新的 headB
    let pB = headB
    while (pB) {
      if (pA === pB) return pA
      pB = pB.next
    }
    pA = pA.next
  }

  return null
}

// 哈希：通过 hashMap 存储第一个链表的所有节点，遍历第二个链表对比 hashMap 内是否存在该节点
// 存在，该节点为相交点
// 不存在，不存在相交点
function getIntersectionNode1(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  const hashMap = new Map<ListNode, number>()

  while (headA) {
    hashMap.set(headA, 1)
    // 指向下一个节点，直至 null 退出 while
    headA = headA.next
  }

  while (headB) {
    // 是否存在
    if (hashMap.has(headB)) return headB
    headB = headB.next
  }

  return null
}
// @lc code=end
