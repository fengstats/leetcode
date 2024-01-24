/*
 * @lc app=leetcode.cn id=58 lang=typescript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start

// 技巧：逆向遍历记录单词长度，从第一个不为空的字符开始计数，遇到空格直接返回记录长度
function lengthOfLastWord(s: string): number {
  let count = 0
  for (let i = s.length - 1; i >= 0; --i) {
    if (count >= 0 && s[i] !== ' ') count++
    else if (count && s[i] === ' ') return count
  }

  return count
}

// 暴力：通过空格切割字符串单词并过滤有效单词，取出最后一个单词长度返回
function lengthOfLastWord1(s: string): number {
  return (
    s
      .split(' ')
      .filter((item) => item)
      .pop()?.length || 0
  )
}
// @lc code=end
