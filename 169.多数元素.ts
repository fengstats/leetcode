/*
 * @lc app=leetcode.cn id=169 lang=typescript
 *
 * [169] 多数元素
 */

// @lc code=start

// 思路：hashMap 记录数组元素出现次数进行比较
function majorityElement(nums: number[]): number {
  const map = new Map()
  // 存储最多的出现次数
  let maxCount = 1
  // 存储最多出现次数的元素
  let ans = nums[0]

  for (let i = 0; i < nums.length; i++) {
    const key = nums[i]
    if (map.has(key)) {
      // 比较出现次数的最大
      const count = map.get(key) + 1
      if (count > maxCount) {
        maxCount = count
        ans = key
      }
      map.set(key, count)
    } else {
      map.set(key, 1)
    }
  }

  return ans
}
// @lc code=end
