/*
 * @lc app=leetcode.cn id=69 lang=typescript
 *
 * [69] x 的平方根
 */

// @lc code=start
// 二分
function mySqrt(x: number): number {
  let left = 0
  let right = x
  let ans = -1

  while (left <= right) {
    const mid = ((right - left) >> 1) + left
    if (mid * mid <= x) {
      // 更新，直到 left + 1 大于 right 时，mid 就是答案
      ans = mid
      // 小于，舍弃左区间，下一轮向右搜索
      left = mid + 1
    } else {
      // 大于，舍弃右区间，下一轮向左搜索
      right = mid - 1
    }
  }

  return ans
}

// 内置库
function mySqrt1(x: number): number {
  return Math.floor(Math.sqrt(x))
}

// @lc code=end
console.log(mySqrt(8))
