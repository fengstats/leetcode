/*
 * @lc app=leetcode.cn id=268 lang=typescript
 *
 * [268] 丢失的数字
 */

// @lc code=start
// 求和：先把 nums 内所有数加起来，再用 0 到 nums.length 的和减去这个数就是答案
function missingNumber(nums: number[]): number {
  // 求 1 到 n 的和公式，高斯求和：n(n+1)/2
  const len = nums.length
  const sum = nums.reduce((prev, cur) => cur + prev, 0)
  const total = (len * (len + 1)) >> 1
  return total - sum
}

// 暴力：先排序后比较
function missingNumber1(nums: number[]): number {
  // 注意数组原生 sort 方法是按照它们的 UTF-16 码元值升序排序的，所以需要手动传入比较函数
  // MDN: 会更改原数组，如果是比较数字而非字符串，可以比较函数内部返回 a-b 来实现数组升序排列（不包含 Infinity 和 NaN）
  nums.sort((a, b) => a - b)

  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] !== i) return i
  }

  return nums.length
}
// @lc code=end
