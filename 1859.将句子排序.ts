/*
 * @lc app=leetcode.cn id=1859 lang=typescript
 *
 * [1859] 将句子排序
 */

// @lc code=start

// 暴力：按空格切割字符串成单词数组，每个单词最后一位字符为序号
// 创建一个与单词数组长度一致的数组，用来存储按序号排序后的单词，最后通过空格拼接成字符串
function sortSentence(s: string): string {
  if (!s) return ''

  const arr = s.split(' ')
  const ans = new Array(arr.length)
  for (let str of arr) {
    // 取最后一个值与单词
    let index = parseInt(str.substring(str.length - 1))
    let word = str.substring(0, str.length - 1)

    // 因为顺序是按照 1 开始，转换为下标需要 -1
    ans[index - 1] = word
  }

  return ans.join(' ')
}
// @lc code=end
