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

// NOTE: 必须要注释才能 submit 代码
// class ListNode {
//   val: number
//   next: ListNode | null
//   constructor(val?: number, next?: ListNode) {
//     this.val = val ?? 0
//     this.next = next ?? null
//   }
// }

// 递归：双指针思路的版本
function reverseList(head: ListNode | null): ListNode | null {
  function reverse(cur: ListNode | null, prev: ListNode | null) {
    // 到最后一个节点了，该返回了
    if (cur === null) return prev
    // 临时存储，用于移动
    const next = cur.next
    // 反转，当前节点指向上一个节点
    cur.next = prev
    // 统一移动一位
    // NOTE: 别以为上面 return prev 这里就不管了
    // 这里还是要 return reverse 函数的，不然直接 undefine 了
    // 调试了半个多小时 😭
    return reverse(next, cur)
    // 其实就是省略了下面的代码
    // prev = cur
    // cur = next
  }
  return reverse(head, null)
}

// 再站双指针！
function reverseList5(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null
  let cur = head
  while (cur) {
    // 1->2 变成 1->null
    // 2->3 编程 2->1
    const next = cur.next
    cur.next = prev
    // 两个指针同时向后移动一位
    prev = cur
    cur = next
  }

  // NOTE: 需要注意这里不是返回 cur，因为循环条件是 cur 有值
  // 退出循环后说明 cur 肯定没有值了，应该是返回上一个节点的值才是最后一个节点
  return prev
}

// 递归：时隔多日再写一遍
function reverseList4(head: ListNode | null): ListNode | null {
  if (!head) return null

  // 1. 找最后一个节点
  if (head.next === null) return head

  // 2. 开始递归
  // NOTE: 这里是扔进递归的是 next，意思就是从倒数第二个节点开始
  const lastNode = reverseList4(head.next)

  // 3. 反转开始：这里所提的上个节点皆按照倒序
  // NOTE: 直接和上个节点成环
  head.next.next = head

  // 4. 打破这个环，上个节点指向我，我指向 null
  // 递归后的下个节点也会指向我（单向），届时让我和它练成环（双向）
  // 然后打破，让我来指向它（单向），它指向 null，一直到最后一个（初始链表的头节点）
  head.next = null

  return lastNode
}

// 递归：精髓就是理解 head.next.next = head 这个操作
function reverseList3(head: ListNode | null): ListNode | null {
  // 第一层的边界处理，链表为空
  if (!head) return null

  // 在递归内将最后一个节点返回（单独写是为了不和第一层判断混淆）
  if (head.next === null) return head

  // 递归开始（入栈），最终返回值就是上面的那个判断，也就是最后一个节点
  const newHead = reverseList3(head.next)

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
  let prev: ListNode | null = null
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

const head5 = new ListNode(5)
const head4 = new ListNode(4, head5)
const head3 = new ListNode(3, head4)
const head2 = new ListNode(2, head3)
const head1 = new ListNode(1, head2)
console.log(reverseList(head1))
