/*
 * @lc app=leetcode.cn id=349 lang=typescript
 *
 * [349] 两个数组的交集
 */

// @lc code=start

// hashTable: 基于力扣给的数值范围我们也可以选择数组来实现，数值范围 <= 1000
function intersection(nums1: number[], nums2: number[]): number[] {
  if (!nums1.length || !nums2.length) return []

  // 这里默认 nums1 在两个数组中长度最短
  if (nums1.length > nums2.length) {
    // 否则与 nums2 进行交换
    ;[nums1, nums2] = [nums2, nums1]
  }

  // 长度 1001 为了防止刚好出现值为 1000 的
  const hashTable = new Array(1001).fill(0)
  // Set 帮我们去重
  const ansSet = new Set<number>()

  // 遍历 nums1 记录出现的数值位置
  for (let num of nums1) {
    hashTable[num] = 1
  }

  // 遍历 nums2 求交集
  for (let num of nums2) {
    hashTable[num] && ansSet.add(num)
  }

  // 转换为数组返回
  return Array.from(ansSet)
}

// hashSet: 去重之后返回两个数组里面都有的
function intersection1(nums1: number[], nums2: number[]): number[] {
  if (!nums1.length || !nums2.length) return []

  const ans: number[] = []
  const set1 = new Set(nums1)
  const set2 = new Set(nums2)

  const pushIntersection = (resArr: number[], traversalArr: Set<number>, contrastArr: Set<number>) => {
    for (let num of traversalArr) {
      if (contrastArr.has(num)) {
        resArr.push(num)
      }
    }
  }

  // 优化，找长度最小的数组遍历，降低遍历次数
  if (set1.size < set2.size) {
    pushIntersection(ans, set1, set2)
  } else {
    pushIntersection(ans, set2, set1)
  }

  return ans
}
// @lc code=end
