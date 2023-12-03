/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

// 和「 160.相交链表 」一模一样，就不多 BB 了
// 双指针
var getIntersectionNode = function (headA, headB) {
  let pA = headA
  let pB = headB

  // 如果没有相交节点，两个指针交换后，最后一个值肯定都会指向 null
  while (pA !== pB) {
    // NOTE: 注意交换指针的值是两个链表的初始头节点，而不是经过更改的指针节点
    // 这里的交换的条件是指针节点为 null，而不是指针节点 next 为 null，后者会进入死循环，一直换
    pA = pA !== null ? pA.next : headB
    pB = pB !== null ? pB.next : headA
  }

  // 返回谁都行
  return pA
}
