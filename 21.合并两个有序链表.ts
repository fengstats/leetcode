/*
 * @lc app=leetcode.cn id=21 lang=typescript
 *
 * [21] 合并两个有序链表
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

// TODO: 递归

// TODO: 双指针

// 暴力：先把两个链表存数组，经过排序后一一更改指向
function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  // 边界处理
  if (list1 && !list2) return list1
  if (list2 && !list1) return list2
  if (!list1 && !list2) return null

  // 那剩下的情况就都有值了
  const headList = <any>[list1, list2]
  while ((list1 = list1.next)) headList.push(list1)
  while ((list2 = list2.next)) headList.push(list2)

  // 升序排列
  headList.sort((a, b) => a.val - b.val)

  // 更改指向
  // len-1 是为了防止 i+1 超出边界
  const len = headList.length
  for (let i = 0; i < len - 1; ++i) headList[i].next = headList[i + 1]
  // 剩下最后一个节点未处理，直接手动指向 null（测试用例全部通过了，貌似不改也没关系）
  headList[len - 1] = null

  return headList[0]
}
// @lc code=end
