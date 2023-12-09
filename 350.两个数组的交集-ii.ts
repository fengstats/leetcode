/*
 * @lc app=leetcode.cn id=350 lang=typescript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start

// hashMap: 优化版本，只用一个就够了
function intersect(nums1: number[], nums2: number[]): number[] {
  if (!nums1.length || !nums2.length) return []

  // 让 nums1 为是长度较短的数组
  if (nums1.length > nums2.length) {
    return intersect(nums2, nums1)
  }

  const ans: number[] = []
  const hashMap = new Map()
  // 把 nums1 的数值按照 { 数值: 出现次数 } 存储
  for (let num of nums1) {
    if (!hashMap.has(num)) hashMap.set(num, 0)
    hashMap.set(num, hashMap.get(num) + 1)
  }

  // 遍历 nums2 求交集
  for (let num of nums2) {
    const count = hashMap.get(num)
    // count 为零了说明 nums2 这个数值的出现次数是比 nums1 多的
    // 此时我们遵循：如果出现次数不一致，则考虑取较小值
    if (hashMap.has(num) && count !== 0) {
      // 每遇到一个存在 hashMap 中的值，其出现次数 -1
      hashMap.set(num, count - 1)
      // 并且将其 push 至 ans 数组
      ans.push(num)
    }
  }

  return ans
}

// hashMap
function intersect1(nums1: number[], nums2: number[]): number[] {
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
