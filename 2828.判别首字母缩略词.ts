/*
 * @lc app=leetcode.cn id=2828 lang=typescript
 *
 * [2828] 判别首字母缩略词
 */

// @lc code=start

// 遍历
function isAcronym(words: string[], s: string): boolean {
  if (words.length !== s.length) {
    return false
  }

  for (let i = 0; i < words.length; i++) {
    if (words[i][0] !== s[i]) {
      return false
    }
  }

  return true
}
// @lc code=end
