/*
 * @lc app=leetcode.cn id=707 lang=typescript
 *
 * [707] 设计链表
 */

// @lc code=start

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val || 0
    this.next = next || null
  }
}

// 优化：使用虚拟头节点的方式，统一操作，简化代码
class MyLinkedList {
  dummyHead: ListNode | null
  size: number
  constructor() {
    this.dummyHead = new ListNode(999)
    this.size = 0
  }

  // 返回 index 位置的节点值
  get(index: number): number {
    // NOTE: 官方定义了数据范围 0 <= index, val <= 1000
    // if (index < 0 || index > this.size - 1) return -1
    let cur = this.dummyHead?.next
    while (index && cur) {
      cur = cur.next
      index--
    }
    return cur?.val ?? -1
  }

  // 插入头节点
  addAtHead(val: number): void {
    // 先连接后面的节点，再连接前面的
    this.dummyHead!.next = new ListNode(val, this.dummyHead!.next)
    this.size++
  }

  // 插入尾节点
  addAtTail(val: number): void {
    let cur = this.dummyHead
    while (cur && cur.next) {
      cur = cur.next
    }
    cur!.next = new ListNode(val)
    this.size++
  }

  // 在 index 位置前插入一个节点
  addAtIndex(index: number, val: number): void {
    // NOTE: 边界处理，居然真的会给越界下标给我，无语
    // 这里越界条件是大于长度，等于长度的时候相当于是插入尾部节点
    if (index > this.size) return

    let cur = this.dummyHead
    while (index && cur) {
      cur = cur.next
      index--
    }
    // 因为是从 dummy 节点开始遍历，所以这个 cur 其实就是 index 的上一个节点
    cur!.next = new ListNode(val, cur?.next)
    this.size++
  }

  // 删除 index 位置节点
  deleteAtIndex(index: number): void {
    // NOTE: 边界处理，居然真的会给越界下标给我，无语
    if (index >= this.size) return

    let cur = this.dummyHead
    while (index && cur) {
      cur = cur.next
      index--
    }
    // cur.next 就是要删除的节点
    cur!.next = cur?.next?.next || null
    this.size--
  }
}

class MyLinkedList1 {
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
    if (prevHead) {
      prevHead.next = prevHead?.next?.next || null
      this.size--
    }
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
obj.addAtHead(1)
obj.addAtTail(3)
obj.addAtIndex(1, 2)
obj.get(1)
obj.deleteAtIndex(1)
obj.get(1)
obj.get(3)
obj.deleteAtIndex(3)
obj.deleteAtIndex(0)
obj.get(0)
obj.deleteAtIndex(0)
obj.get(0)
