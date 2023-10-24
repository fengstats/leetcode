/*
 * @lc app=leetcode.cn id=205 lang=typescript
 *
 * [205] 同构字符串
 */

// @lc code=start
// hashMap: 与 290 很像，但是更简单，题目描述说 s 和 t 字符串长度相同
// 而且只进行单字符匹配，所以我们可以通过加点盐的方式只用一个 Map 搞定
function isIsomorphic(s: string, t: string): boolean {
  if (!s.length) return true

  const map = new Map<string, string>()

  for (let i = 0; i < t.length; ++i) {
    const key = s[i]
    const val = t[i]
    const key2 = `xxx${val}`
    !map.has(key) && map.set(key, val)
    !map.has(key2) && map.set(key2, key)

    if (map.get(key) !== val) return false
    // 不同字符映射到了同一个字符，如 a,b 映射为 a,a
    if (map.get(key2) !== key) return false
  }

  return true
}
// @lc code=end
