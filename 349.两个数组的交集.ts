/*
 * @lc app=leetcode.cn id=349 lang=typescript
 *
 * [349] 两个数组的交集
 */

// @lc code=start

// hashSet: 去重之后返回两个数组里面都有的
function intersection(nums1: number[], nums2: number[]): number[] {
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
