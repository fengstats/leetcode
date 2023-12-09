/*
 * @lc app=leetcode.cn id=350 lang=typescript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start

// hashMap
function intersect(nums1: number[], nums2: number[]): number[] {
  if (!nums1.length || !nums2.length) return []

  // 转换存储
  const map1 = new Map()
  const map2 = new Map()
  for (let num of nums1) {
    if (!map1.has(num)) map1.set(num, 0)
    map1.set(num, map1.get(num) + 1)
  }
  for (let num of nums2) {
    if (!map2.has(num)) map2.set(num, 0)
    map2.set(num, map2.get(num) + 1)
  }

  // 找交集
  const ans: number[] = []
  for (let num of map1.keys()) {
    // 存在交集
    if (map2.has(num)) {
      const count1 = map1.get(num)
      const count2 = map2.get(num)
      // 如果出现次数不一致，则考虑取较小值
      ans.push(...new Array(Math.min(count1, count2)).fill(num))
    }
  }

  return ans
}

// @lc code=end

console.log(intersect([1, 2, 2, 1], [2, 2]))
