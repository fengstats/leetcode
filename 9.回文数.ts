/*
 * @lc app=leetcode.cn id=9 lang=typescript
 *
 * [9] 回文数
 */

// @lc code=start

// 双指针
function isPalindrome(x: number): boolean {
  const arr = Array.from(String(x))
  let left = 0
  let right = arr.length - 1
  while (left < right) {
    if (arr[left] !== arr[right]) {
      return false
    }
    left++
    right--
  }

  return true
}

// 暴力：转换成字符串、转列表、再反转，最后转回数字，通过对比正序倒序数字判断是否为回文数
function isPalindrome1(x: number): boolean {
  const y = Number((x + '').split('').reverse().join(''))
  if (x === y) return true
  else return false
}
// @lc code=end
