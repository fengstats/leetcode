/*
 * @lc app=leetcode.cn id=680 lang=typescript
 *
 * [680] 验证回文串 II
 */

// @lc code=start
// 双指针：允许一次对比失败，对比失败后，尝试删除左右字符来校验剩余字符串是否存在构成回文串的情况
function validPalindrome(s: string): boolean {
  // 是否为回文串
  const isPalindrome = (l, r) => {
    while (l < r) {
      if (s[l] !== s[r]) return false
      l++
      r--
    }
    return true
  }

  let left = 0
  let right = s.length - 1
  while (left < right) {
    if (s[left] !== s[right]) return isPalindrome(left, right - 1) || isPalindrome(left + 1, right)
    left++
    right--
  }

  return true
}
// @lc code=end
