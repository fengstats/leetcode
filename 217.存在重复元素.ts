/*
 * @lc app=leetcode.cn id=217 lang=typescript
 *
 * [217] 存在重复元素
 */

// @lc code=start
function containsDuplicate(nums: number[]): boolean {
  const map = {}
  for (let i = 0; i < nums.length; i++) {
    map[nums[i]]++
  }

  for (const val of Object.values(map)) {
    if (Number(val) >= 2) return true
  }

  return false
}
// @lc code=end
containsDuplicate([1, 2, 3, 1])
