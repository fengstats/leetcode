/*
 * @lc app=leetcode.cn id=49 lang=typescript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
// 排序 + 哈希：无思路，参考题解
function groupAnagrams(strs: string[]): string[][] {
  // 互为字母异位词的两个字符串包含字母肯定是相同的，所以对其进行排序后的结果肯定也是相同的
  // 将字符串排序后的结果作为 Map 的 key，其 value 为一个字符串数组
  // 若排序后比对发现已存在 key，直接将字符串 push 至 value
  const map = new Map<string, string[]>()
  for (const str of strs) {
    const key = Array.from(str).sort().join('')
    // 不存在则创建
    if (!map.has(key)) map.set(key, [str])
    else map.get(key)!.push(str)
  }

  // 通过遍历 Map.values() 组成新二维数组返回
  // const ans: string[][] = []
  // for (let val of map.values()) ans.push(val)

  // 通过 Array.from 优化代码
  return Array.from(map.values())
}
// @lc code=end
console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']))
