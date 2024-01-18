/*
 * @lc app=leetcode.cn id=2085 lang=typescript
 *
 * [2085] 统计出现过一次的公共字符串
 */

// @lc code=start

// 单个 hashMap
function countWords(words1: string[], words2: string[]): number {
  let ans = 0
  const map = new Map()

  // 初始化
  for (const word of words1) {
    if (!map.has(word)) {
      // 只出现一次
      map.set(word, 1)
    } else {
      // NOTE: 这里用无穷大表示这个 word 已经出现多次，后续不能计入答案了
      map.set(word, Infinity)
    }
  }

  for (const word of words2) {
    // NOTE: 只增加 map 中已存在的值的出现次数
    if (map.has(word)) {
      map.set(word, map.get(word) + 1)
    }
  }

  // 把最后加起来等于 2 的值出现次数提取出来统计
  for (const count of map.values()) {
    if (count === 2) {
      ans++
    }
  }

  return ans
}

// hashMap
function countWords1(words1: string[], words2: string[]): number {
  const map1 = new Map()
  const map2 = new Map()

  function addMap(map, strArr) {
    for (const word of strArr) {
      if (!map.has(word)) {
        map.set(word, 0)
      }
      map.set(word, (map.get(word) as number) + 1)
    }
  }

  addMap(map1, words1)
  addMap(map2, words2)

  let ans = 0
  for (const [word, count] of map1.entries()) {
    if (count === 1 && map2.get(word) === 1) {
      ans++
    }
  }

  return ans
}
// @lc code=end
console.log(countWords(['leetcode', 'is', 'amazing', 'as', 'is'], ['amazing', 'leetcode', 'is']))
