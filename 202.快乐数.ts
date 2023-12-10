/*
 * @lc app=leetcode.cn id=202 lang=typescript
 *
 * [202] 快乐数
 */

// @lc code=start

// hashSet: 通过数学运算来优化获取数值每个位置上值的方法
function isHappy(n: number): boolean {
  if (n === 1) return true

  // 取数值各个单位上平方之和
  const getSum = (num: number) => {
    let sum = 0
    while (num) {
      // 取 个位上的值 的平方
      sum += (num % 10) ** 2
      // 直接去掉个位上的值
      num = Math.floor(num / 10)
    }

    return sum
  }

  const sumSet = new Set<number>()
  while (n !== 1) {
    // 先判断有没有，有就退出，没有就录入
    if (sumSet.has(n)) return false
    sumSet.add(n)
    // 让循环继续判断下一个新值
    n = getSum(n)
  }

  return true
}

// hashSet: 题目核心就是可能会 “无限循环” 说明求出来的值可能会重复
function isHappy1(n: number): boolean {
  if (n === 1) return true

  const sumSet = new Set<number>()
  while (n !== 1) {
    n = String(n)
      .split('')
      .map((number) => Number(number) ** 2)
      .reduce((prev, cur) => prev + cur, 0)
    // 只要出现重复的值那就肯定不是快乐数
    if (sumSet.has(n)) return false
    sumSet.add(n)
  }

  return true
}
// @lc code=end

console.log(isHappy(19))
