/*
 * @lc app=leetcode.cn id=260 lang=typescript
 *
 * [260] 只出现一次的数字 III
 */

// @lc code=start

// TODO: 设计并实现线性时间复杂度的算法且仅使用常量额外空间来解决此问题

// hashMap
function singleNumber(nums: number[]): number[] {
  const map = new Map<number, number>()

  for (const num of nums) {
    if (!map.has(num)) {
      map.set(num, 0)
    }
    map.set(num, (map.get(num) as number) + 1)
  }

  const ans: number[] = []
  for (const [num, count] of map.entries()) {
    if (count === 1) {
      ans.push(num)
    }
  }

  return ans
}
// @lc code=end
