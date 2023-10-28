/*
 * @lc app=leetcode.cn id=26 lang=typescript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
// 暴力
function removeDuplicates(nums: number[]): number {
  // 去重
  const arr = Array.from(new Set(nums))
  // 赋值
  for (let [i, val] of arr.entries()) nums[i] = val

  return arr.length
}
// @lc code=end
