/*
 * @lc app=leetcode.cn id=137 lang=typescript
 *
 * [137] 只出现一次的数字 II
 */

// @lc code=start

// TODO: 位运算

// hashMap
function singleNumber(nums: number[]): number {
  // 恰好出现次数
  const JUST_OCCURRENCE_COUNT = 3
  // key 是 num，value 是出现次数
  const map = new Map<number, number>()

  for (const num of nums) {
    if (!map.has(num)) {
      map.set(num, 0)
    }
    const count = (map.get(num) as number) + 1
    if (count === JUST_OCCURRENCE_COUNT) {
      map.delete(num)
    } else {
      map.set(num, count)
    }
  }

  return map.keys().next().value
}
// @lc code=end
