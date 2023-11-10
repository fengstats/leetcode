/*
 * @lc app=leetcode.cn id=242 lang=typescript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
// 数组模拟哈希表：和 LCR 032 题基本一样，就是对字母异位词的定义有些不同，就不写思路了
function isAnagram(s: string, t: string): boolean {
  if (s === t) return true
  if (s.length !== t.length) return false

  const table = new Array(26).fill(0)
  const aCode = 'a'.codePointAt(0) ?? 0

  for (let char of s) table[(char.codePointAt(0) ?? 0) - aCode]++
  for (let char of t) if (table[(char.codePointAt(0) ?? 0) - aCode]-- === 0) return false

  return true
}
// @lc code=end
