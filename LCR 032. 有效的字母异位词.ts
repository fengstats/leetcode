// 给定两个字符串 s 和 t ，编写一个函数来判断它们是不是一组变位词（字母异位词）

// 注意：若 s 和 t 中每个字符出现的次数都相同且字符顺序不完全相同，则称 s 和 t 互为变位词（字母异位词）

// 示例 1
// 输入: s = "anagram", t = "nagaram"
// 输出: true

// 示例 2
// 输入: s = "rat", t = "car"
// 输出: false

// 示例 3
// 输入: s = "a", t = "a"
// 输出: false

// hashMap: 先排除暴力提到的两种特殊情况
// 遍历 s 中的字符按照 { 字符: 出现次数 } 的方式存储至 hashMap 中
// 遍历 t 中的字符与 hashMap 中存储的字符进行对比并减少出现次数，若出现
// 不存在或出现次数为 0 视为失败，否则互为变位词（这道题和 383.赎金信 思路一样一样的）
function isAnagram(s: string, t: string): boolean {
  if (s === t || s.length !== t.length) return false

  const map = new Map()
  for (let char of s) {
    if (!map.has(char)) map.set(char, 0)
    map.set(char, map.get(char) + 1)
  }

  for (let char of t) {
    if (!map.has(char) || map.get(char) === 0) return false
    map.set(char, map.get(char) - 1)
  }

  // 通过！
  return true
}

// 暴力：题目中提到了出现次数要相同而且字符顺序不完全相同，以下情况排除
// - 两个字符串完全相同
// - 长度不一
// 排除掉这两个情况，就可以将两个字符串进行排序对比，如果一致则互为变位词，否则非也
function isAnagram1(s: string, t: string): boolean {
  if (s === t || s.length !== t.length) return false
  if ([...s].sort().join('') === [...t].sort().join('')) return true

  return false
}
