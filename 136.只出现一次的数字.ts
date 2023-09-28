/*
 * @lc app=leetcode.cn id=136 lang=typescript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
// 暴力解题
// 思路：遍历数组，通过 hashMap ，key 存储值，value 存储次数
// 遍历 map，找出 value 为 1 的值即可
function singleNumber(nums: number[]): number {
  if (nums.length === 0) return -1
  const map = new Map<number, number>()

  for (let i = 0; i < nums.length; i++) {
    const key = nums[i]
    if (map.has(key)) {
      // 存在 +1，! 代表我认为肯定有
      map.set(key, map.get(key)! + 1)
    } else {
      // 不存在创建
      map.set(key, 1)
    }
  }

  for (const [key, val] of map.entries()) {
    if (val === 1) return key
  }

  return -1
}
// @lc code=end
console.log(singleNumber([2, 2, 0, 0]))
