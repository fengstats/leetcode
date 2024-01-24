/*
 * @lc app=leetcode.cn id=217 lang=typescript
 *
 * [217] 存在重复元素
 */

// @lc code=start

// 思路：set 集合
function containsDuplicate(nums: number[]): boolean {
  const set = new Set()
  for (let num of nums) {
    if (set.has(num)) return true
    set.add(num)
  }
  return false
}

// 思路：map 映射
function containsDuplicate1(nums: number[]): boolean {
  const map: { [index: number]: any } = {}
  for (let i = 0; i < nums.length; i++) {
    const key = nums[i]
    if (map[key] === undefined) map[key] = 0
    map[key]++
    if (map[key] === 2) {
      return true
    }
  }
  return false
}
// @lc code=end
console.log(containsDuplicate([1, 2, 3, 1]))
