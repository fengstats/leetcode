/*
 * @lc app=leetcode.cn id=2085 lang=typescript
 *
 * [2085] 统计出现过一次的公共字符串
 */

// @lc code=start

// hashMap
function countWords(words1: string[], words2: string[]): number {
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
