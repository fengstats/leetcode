/*
 * @lc app=leetcode.cn id=290 lang=typescript
 *
 * [290] 单词规律
 */

// @lc code=start

// hashMap: 刚开始想简单了，就写了个单 Map 映射对比，这题需要双 Map 映射
// 一个存 key:value，一个存 value:key，对比通过双重验证才行
function wordPattern(pattern: string, s: string): boolean {
  const arr = s.split(' ')
  if (pattern.length !== arr.length) return false

  const patternMap = new Map()
  const strMap = new Map()

  for (let i = 0; i < arr.length; ++i) {
    // 存储
    const key = pattern[i]
    const val = arr[i]
    if (!patternMap.has(key)) patternMap.set(key, val)
    if (!strMap.has(val)) strMap.set(val, key)

    // 对比
    if (patternMap.get(key) !== val || strMap.get(val) !== key) return false
  }

  // 完全匹配
  return true
}
// @lc code=end
