/*
 * @lc app=leetcode.cn id=819 lang=typescript
 *
 * [819] 最常见的单词
 */

// @lc code=start

// 正则 + hashMap
function mostCommonWord(paragraph: string, banned: string[]): string {
  // 1. 将 paragraph 字符串全部转为小写字母，然后通过正则将有效单词匹配至一个数组中
  const wordList = paragraph.toLocaleLowerCase().match(/[a-z]+/g) ?? []

  // 2. 将 banned 禁用词列表转换为 map 形式存储，方便后续频繁取值对比，时间复杂度从 O(N) 降低至 O(1)
  const bannedMap = banned.reduce((map, cur) => {
    map.set(cur, true)
    return map
  }, new Map<string, boolean>())

  // 3. 定义单词出现次数 map，存储形式为 { 单词: 出现次数 }，同时定义当前出现次最多的单词与次数（省的后面再遍历一遍 map 拿）
  const wordMap = new Map<string, number>()
  let maxWord = ''
  let maxCount = 0

  // 4. 遍历有效单词列表，存储到 map 中并对比更新
  for (let word of wordList) {
    // 在禁用词中直接跳过
    if (bannedMap.has(word)) continue
    // 没有就创建
    if (!wordMap.has(word)) wordMap.set(word, 0)
    // 当前单词出现次数
    const count = (wordMap.get(word) ?? 0) + 1
    wordMap.set(word, count)
    // 更新当前单词与最大出现次数
    if (count > maxCount) {
      maxCount = count
      maxWord = word
    }
  }

  // 5. 返回出现次数最多的单词即可
  return maxWord
}
// @lc code=end
