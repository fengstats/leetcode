/*
 * @lc app=leetcode.cn id=383 lang=typescript
 *
 * [383] 赎金信
 */

// @lc code=start

// hashMap: 将 magazine 字符串按照 { 字符 : 出现次数 } 的 Map 形式存储
// 然后一一比对 ransomNote 内的字符在 Map 中有空余存储数量，比对成功一次次数减一
// - 遇到不存在或出现次数为 0 时，直接返回失败
// - 若对比结束还没有返回失败的情况，那就是可构成字符
function canConstruct(ransomNote: string, magazine: string): boolean {
  const map = new Map<string, any>()
  for (let str of magazine) {
    // 初始为 0，每见一次 +1
    if (!map.has(str)) map.set(str, 0)
    map.set(str, map.get(str) + 1)
  }

  for (let str of ransomNote) {
    if (!map.has(str) || map.get(str) === 0) return false
    map.set(str, map.get(str) - 1)
  }

  return true
}
// @lc code=end
