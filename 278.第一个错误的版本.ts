/*
 * @lc app=leetcode.cn id=278 lang=typescript
 *
 * [278] 第一个错误的版本
 */

// @lc code=start
/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

// 二分
var solution = function (isBadVersion: any) {
  return function (n: number): number {
    let left = 0
    let right = n + 1
    while (left < right) {
      // NOTE: 用 >> 时，出现 2126753390 时会导致计算溢出，可能是我对 n+1 的问题？我还以为是我二分写错了
      // TODO: 后面再看
      // const mid = ((right - left) >> 1) + left
      const mid = Math.floor((right - left) / 2 + left)
      if (isBadVersion(mid) === true) {
        // 错误的，继续缩小右边界，直到找到第一个错误版本为止
        right = mid
      } else {
        // 这个版本是正确的，收缩左边界，下轮向右边界搜索
        left = mid + 1
      }
    }
    return left
  }
}
// @lc code=end
