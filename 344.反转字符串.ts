/*
 * @lc app=leetcode.cn id=344 lang=typescript
 *
 * [344] 反转字符串
 */

// @lc code=start
/**
 Do not return anything, modify s in-place instead.
 */

// 双指针：左右两个指针分别向中间靠拢同时一一交换值，直到两个指针重合，交换完毕
function reverseString(s: string[]): void {
  let left = 0
  let right = s.length - 1
  // 通过数组解构交换值
  while (left < right) [s[left++], s[right--]] = [s[right], s[left]]
}

// api
function reverseString1(s: string[]): void {
  s.reverse()
}
// @lc code=end
