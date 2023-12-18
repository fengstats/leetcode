/*
 * @lc app=leetcode.cn id=374 lang=typescript
 *
 * [374] 猜数字大小
 */

// @lc code=start
/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

// function guess(n: number): number {
//   const pick = 2
//   if (n === pick) return 0
//   else if (pick < n) return -1
//   else return 1
// }

// 二分
function guessNumber(n: number): number {
  let left = 1
  let right = n + 1

  while (left < right) {
    const mid = Math.floor((right - left) / 2 + left)
    if (guess(mid) === 0) return mid
    if (guess(mid) === 1) {
      // 猜小了，要往大了猜，收缩左边界，下轮向右边界搜索
      left = mid + 1
    } else {
      // 猜大了
      right = mid
    }
  }

  return left
}
// @lc code=end

console.log(guessNumber(3))
