/*
 * @lc app=leetcode.cn id=66 lang=typescript
 *
 * [66] 加一
 */

// @lc code=start
// 暴力
function plusOne(digits: number[]): number[] {
  const len = digits.length

  for (let i = len - 1; i >= 0; --i) {
    // 1. 末尾元素不等于 9，直接 +1 返回即可
    // 2. 末尾出现多个 9，考虑到需要进位，先找到第一个不等于 9 的元素，将其 +1，后续元素置 0
    if (digits[i] !== 9) {
      ++digits[i]
      // 后续元素置 0（i + 1 开始）
      for (let n = i + 1; n < len; ++n) {
        digits[n] = 0
      }
      return digits
    }
  }

  // 3. 全都是 9 的情况，创建一个新数组，需要比原数组多一位，将第一个元素设置为 1，其余位置置 0
  const arr = new Array(len + 1).fill(0)
  arr[0] = 1

  return arr
}
// @lc code=end
console.log(plusOne([9]))
