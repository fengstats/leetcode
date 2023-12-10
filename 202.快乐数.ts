/*
 * @lc app=leetcode.cn id=202 lang=typescript
 *
 * [202] 快乐数
 */

// @lc code=start

// hashSet: 题目核心就是可能会 “无限循环” 说明求出来的值可能会重复
function isHappy(n: number): boolean {
  if (n === 1) return true

  const sumSet = new Set<number>()
  while (n !== 1) {
    // 只要出现重复的值那就肯定不是快乐数
    if (sumSet.has(n)) return false
    n = String(n)
      .split('')
      .map((number) => Number(number) ** 2)
      .reduce((prev, cur) => prev + cur, 0)
    sumSet.add(n)
  }

  return true
}
// @lc code=end
