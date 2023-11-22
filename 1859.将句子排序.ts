/*
 * @lc app=leetcode.cn id=1859 lang=typescript
 *
 * [1859] 将句子排序
 */

// @lc code=start
// 技巧：考虑到面试可能不让用 split 这种 api，所以自己对字符做处理
function sortSentence(s: string): string {
  if (!s) return ''

  // 临时单词
  let tempWord = ''
  // 后面会根据记录单词数目对数组长度做切割
  let wordCount = 0
  // 不确定单词数目，这里按照题目所提给最大 9 个
  const arr = new Array(9)

  for (let char of s) {
    // 是数字的话，存储并清空临时单词，单词数目加一
    if (char >= '1' && char <= '9') {
      arr[Number(char) - 1] = tempWord
      tempWord = ''
      wordCount++
    }

    // 不是空格，说明是某个单词的字符，拼接到临时单词上
    else if (char !== ' ') tempWord += char
  }

  arr.length = wordCount
  // 拼接返回结果（这里完全可以通过单词数目遍历自己拼接返回，太简单就不写了）
  return arr.join(' ')
}

// 暴力：按空格切割字符串成单词数组，每个单词最后一位字符为序号
// 创建一个与单词数组长度一致的数组，用来存储按序号排序后的单词，最后通过空格拼接成字符串
function sortSentence1(s: string): string {
  if (!s) return ''

  const arr = s.split(' ')
  const ans = new Array(arr.length)
  for (let str of arr) {
    // 取最后一个值与单词
    let index = Number(str.substring(str.length - 1))
    let word = str.substring(0, str.length - 1)

    // 因为顺序是按照 1 开始，转换为下标需要 -1
    ans[index - 1] = word
  }

  return ans.join(' ')
}
// @lc code=end
