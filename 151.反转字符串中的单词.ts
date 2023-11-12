/*
 * @lc app=leetcode.cn id=151 lang=typescript
 *
 * [151] 反转字符串中的单词
 */

// @lc code=start
// 正则 + 双指针
function reverseWords(s: string): string {
  // 1. 通过正则将有效单词匹配出来并返回数组形式
  const wordList = s.match(/[a-zA-Z0-9]+/g) || []

  // 2. 左右双指针向中间移动，一一换位反转
  let left = 0
  let right = wordList.length - 1
  while (left < right) [wordList[left++], wordList[right--]] = [wordList[right], wordList[left]]

  // 3. 空格分隔，合并返回
  return wordList.join(' ')
}
// @lc code=end
