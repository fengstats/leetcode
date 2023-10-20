/*
 * @lc app=leetcode.cn id=206 lang=typescript
 *
 * [206] 反转链表
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

// 递归：精髓就是理解 head.next.next = head 这个操作
function reverseList(head: ListNode | null): ListNode | null {
  // 第一层的边界处理，链表为空
  if (!head) return null

  // 在递归内将最后一个节点返回（单独写是为了不和第一层判断混淆）
  if (head.next === null) return head

  // 递归开始（入栈），最终返回值就是上面的那个判断，也就是最后一个节点
  const newHead = reverseList(head.next)

  // 假设链表为 a->b->c->null，递归能到这肯定是 b 节点（倒数第二个）
  // 经过这个操作后会变成 b->c->b，也就是将 c 节点的指向改成了 b，开始反转
  head.next.next = head
  // 但是 b->c，c->b 这样就会成为一个环，如何要把这个环打破？通过 head.next = null
  // 就是将 b.next 指向 null，这样结果就变成了 c->b->null
  // 等这一层递归结束，下一层轮到 a 节点，重复上述操作，将变成 b->a->null
  head.next = null

  // 递归结束，返回链表新头节点，反转完成！
  return newHead
}

// 迭代：一次循环搞定（双指针或三指针？用了一个临时节点存储）
function reverseList2(head: ListNode | null): ListNode | null {
  // 上一个的节点
  let prev = null
  // 剩余节点，用于循环
  let remain = head

  while (remain) {
    // 存储原有链表后面的节点不被更改（循环需要）
    const next = remain.next
    // 反转链表（第一个节点进来会被赋值为 null，第二个节点进来会被赋值为第一个节点）
    remain.next = prev
    // 给下个循环节点赋值使用
    prev = remain
    // 继续循环剩余节点
    remain = next
  }

  // 退出循环时链表反转结束，prev 肯定最后一个节点
  return prev
}

// 暴力：先用数组存储所有节点，通过逆向循环遍历从最后一个节点开始
// 将其 next 指向前一个数组元素节点，直到循环结束，取出最后一个节点返回
function reverseList1(head: ListNode | null): ListNode | null {
  if (!head) return null

  // 存储
  const arr = <any>[head]
  while ((head = head.next)) arr.push(head)

  // 更改指向
  const lastIndex = arr.length - 1
  for (let i = lastIndex; i >= 0; --i) {
    arr[i].next = arr[i - 1] || null
  }

  return arr[lastIndex]
}
// @lc code=end
