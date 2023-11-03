/*
 * @lc app=leetcode.cn id=448 lang=typescript
 *
 * [448] 找到所有数组中消失的数字
 */

// @lc code=start
// hashSet + 遍历
// 将数组存入 Set 集合中（顺便去重），遍历数组查询当前下标加一的值是否存在于 Set 中
// Set 是用于空间换时间，下标加一是模拟题目中所提到的 1~n，n 为数组长度的值
function findDisappearedNumbers(nums: number[]): number[] {
  const ans: number[] = []
  const set = new Set<number>(nums)

  nums.forEach((_, index) => !set.has(index + 1) && ans.push(index + 1))

  return ans
}
// @lc code=end
