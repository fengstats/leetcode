/*
 * @lc app=leetcode.cn id=1160 lang=typescript
 *
 * [1160] 拼写单词
 */

// @lc code=start

// hashMap: 将字母表按照 { 字母: 出现次数 } 的方式存储，词汇表内的单词也这么存
// 词汇表单词字母对比字母表字母的出现次数，超过字母表出现次数的单词，说明无法构成
// 否则反之，把这个单词长度加到最终要返回的长度中
function countCharacters(words: string[], chars: string): number {
  let ansLen = 0
  const charsMap = new Map<string, number>()
  for (let char of chars) {
    if (!charsMap.has(char)) charsMap.set(char, 0)
    charsMap.set(char, charsMap.get(char)! + 1)
  }

  for (let word of words) {
    let isOk = true
    const wordMap = new Map<string, number>()
    for (let char of word) {
      if (!wordMap.has(char)) wordMap.set(char, 0)
      wordMap.set(char, wordMap.get(char)! + 1)
    }

    // 对比
    for (let char of word) {
      if (wordMap.get(char)! > (charsMap.get(char) ?? 0)) {
        isOk = false
        break
      }
    }

    if (isOk) ansLen += word.length
  }

  return ansLen
}
// @lc code=end
