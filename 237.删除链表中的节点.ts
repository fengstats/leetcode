/*
 * @lc app=leetcode.cn id=237 lang=typescript
 *
 * [237] 删除链表中的节点
 */

// @lc code=start

class ListNode {
  val: number
  next: ListNode | null
  constructor(val = 0, next = null) {
    this.val = val
    this.next = next
  }
}

// 骚操作：直接伪装成下一个节点并且指向下下个节点，相当于我完全替代了你哈哈哈哈
function deleteNode(node: ListNode | null): void {
  if (node === null || node.next === null) return

  node.val = node.next.val
  node.next = node.next.next
}

// 常规思路：遍历后续的节点一一进行替换
function deleteNode1(node: ListNode | null): void {
  while (node?.next) {
    // 伪装成下一个节点
    node.val = node.next.val
    // 到了倒数第 2 个节点时，直接截断链表指向为 null
    if (node.next.next === null) node.next = null
    // 继续遍历
    node = node.next
  }
}
// @lc code=end
