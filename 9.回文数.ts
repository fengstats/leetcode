/*
 * @lc app=leetcode.cn id=9 lang=typescript
 *
 * [9] 回文数
 */

// @lc code=start
// 暴力：转换成字符串、转列表、再反转，最后转回数字，通过对比正序倒序数字判断是否为回文数
function isPalindrome(x: number): boolean {
  const y = Number((x + '').split('').reverse().join(''))
  if (x === y) return true
  else return false
}
// @lc code=end
