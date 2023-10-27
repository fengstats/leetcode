/*
 * @lc app=leetcode.cn id=155 lang=typescript
 *
 * [155] 最小栈
 */

// @lc code=start
// 辅助栈：为了达到时间复杂度 O(1)，与主栈同步操作存储一个最小栈，最小栈内的栈顶元素永远是主栈内的最小值
// 可能概念有点抽象，那我们代入数据观察：
//   1. 入栈 1，主栈 [1]，最小栈 [1]
//   2. 入栈 10, 主栈 [1, 10]，最小栈 [1, 1]
//   3. 入栈 -1，主栈 [1, 10, -1]，最小栈 [1, 1, -1]（最小值被更新）
//   4. 三次的入栈操作相信已经看出来最小栈存储规律了，即获取最小值只需要把最小栈栈顶返回
class MinStack {
  protected stack: number[] = []
  protected minStack: number[] = []

  constructor() {
    this.stack = []
    this.minStack = []
  }

  push(val: number): void {
    this.stack.push(val)
    // ?? Infinity 是为了防止最小栈内无值时被调用
    this.minStack.push(Math.min(val, this.getMin() ?? Infinity))
  }

  pop(): void {
    this.stack.pop()
    this.minStack.pop()
  }

  top(): number {
    return this.stack[this.stack.length - 1]
  }

  getMin(): number {
    return this.minStack[this.minStack.length - 1]
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end
