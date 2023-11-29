/*
 * @lc app=leetcode.cn id=707 lang=typescript
 *
 * [707] 设计链表
 */

// @lc code=start

// class ListNode {
//   val: number
//   next: ListNode | null
//   constructor(val?: number, next?: ListNode | null) {
//     this.val = val || 0
//     this.next = next || null
//   }
// }

class MyLinkedList {
  size: number
  head: ListNode | null = null
  constructor() {
    this.size = 0
    this.head = null
  }

  // 获取 index 个节点
  private getHead(index: number): ListNode | null {
    let cur = this.head
    while (index && cur) {
      cur = cur.next
      index--
    }

    return cur
  }

  // 获取链表第 index 个节点的数值
  get(index: number): number {
    return this.getHead(index)?.val ?? -1
  }

  // 在链表最前面插入一个节点，也就是头节点
  addAtHead(val: number): void {
    const newHead = new ListNode(val, this.head)
    this.head = newHead
    this.size++
  }

  // 在链表最后面插入一个节点，也就是尾节点
  addAtTail(val: number): void {
    const tailHead = new ListNode(val)
    let cur = this.head
    while (cur && cur.next) {
      cur = cur.next
    }
    // 确保有值
    if (cur) cur.next = tailHead
    // 没有值就直接当头节点了
    else this.head = tailHead
    this.size++
  }

  // 在链表第 index 个节点前插入一个节点
  addAtIndex(index: number, val: number): void {
    // 处理头节点
    if (index === 0) {
      this.addAtHead(val)
      return
    }

    // 找到上一个节点
    const prevHead = this.getHead(index - 1)
    const newHead = new ListNode(val, prevHead?.next)
    if (prevHead) prevHead.next = newHead
    this.size++
  }

  // 删除链表第 index 个节点
  deleteAtIndex(index: number): void {
    // 处理头节点
    if (index === 0) {
      this.head = this.head?.next || null
      return
    }

    const prevHead = this.getHead(index - 1)
    prevHead && (prevHead.next = prevHead?.next?.next || null)
    this.size--
  }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
// @lc code=end

var obj = new MyLinkedList()
obj.addAtHead(0)
obj.addAtIndex(1, 1)
obj.get(2)
obj.addAtHead(4)
obj.get(2)
obj.addAtHead(4)
obj.get(2)
obj.get(3)
obj.addAtIndex(1, 6)
obj.addAtTail(1)
obj.addAtHead(0)
