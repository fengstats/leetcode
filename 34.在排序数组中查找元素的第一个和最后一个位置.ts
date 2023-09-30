/*
 * @lc app=leetcode.cn id=34 lang=typescript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
// 暴力
// 思路：非递减数组（可能存在重复元素的升序数组）
function searchRange(nums: number[], target: number): number[] {
  const res = [-1, -1]
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      if (res[0] === -1) res[0] = i
      res[1] = i
    }
  }

  return res
}
// @lc code=end
