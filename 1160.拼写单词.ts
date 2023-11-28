/*
 * @lc app=leetcode.cn id=1160 lang=typescript
 *
 * [1160] 拼写单词
 */

// @lc code=start

// 数组代替 hashMap
function countCharacters(words: string[], chars: string): number {
  let ansLen = 0

  // 构建字母表
  const aCodePoint = 'a'.codePointAt(0) ?? 0
  const table: number[] = new Array(26).fill(0)
  for (let char of chars) table[char.codePointAt(0)! - aCodePoint]++

  for (let word of words) {
    // 单词表
    const wordTable: number[] = new Array(26).fill(0)
    for (let char of word) wordTable[char.codePointAt(0)! - aCodePoint]++

    // 校验
    let isOk = true
    for (let char of word) {
      const index = (char.codePointAt(0) ?? 0) - aCodePoint
      if (wordTable[index] > table[index]) {
        isOk = false
        break
      }
    }

    if (isOk) ansLen += word.length
  }

  return ansLen
}

// hashMap: 将字母表按照 { 字母: 出现次数 } 的方式存储，词汇表内的单词也这么存
// 词汇表单词字母对比字母表字母的出现次数，超过字母表出现次数的单词，说明无法构成
// 否则反之，把这个单词长度加到最终要返回的长度中
function countCharacters1(words: string[], chars: string): number {
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

console.log(countCharacters(['cat', 'bt', 'hat', 'tree'], 'atach'))
