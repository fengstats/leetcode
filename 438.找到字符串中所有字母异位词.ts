/*
 * @lc app=leetcode.cn id=438 lang=typescript
 *
 * [438] 找到字符串中所有字母异位词
 */

// @lc code=start

// 滑动窗口
function findAnagrams(s: string, p: string): number[] {
  // 一定不存在字母异位词
  if (s.length < p.length) return []

  let start = 0
  let end = p.length
  const ans: number[] = []
  const sTable: number[] = new Array(26).fill(0)
  const pTable: number[] = new Array(26).fill(0)
  const A_UNICODE: number = 'a'.charCodeAt(0)

  // 统计 s 和 p 字符串中字符出现次数
  for (let i = 0; i < p.length; i++) {
    sTable[s[i].charCodeAt(0) - A_UNICODE]++
    pTable[p[i].charCodeAt(0) - A_UNICODE]++
  }
  const pCountStr = pTable.toString()

  // 长度相等时的特殊处理，不走下面的 while
  if (sTable.toString() === pCountStr) ans.push(start)

  while (end < s.length) {
    //将起始位置字符出现次数 -1
    sTable[s[start].charCodeAt(0) - A_UNICODE]--
    // 将终止位置字符出现次数 +1
    sTable[s[end].charCodeAt(0) - A_UNICODE]++

    // NOTE: 可直接放在上面统计中
    // 起始位置向后移动一位
    start++
    // 终止位置也向后移动一位
    end++

    // 对比
    if (sTable.toString() === pCountStr) ans.push(start)
  }

  return ans
}
// @lc code=end

console.log(findAnagrams('cbaebabacd', 'abc'))
