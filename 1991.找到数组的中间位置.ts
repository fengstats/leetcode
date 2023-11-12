/*
 * @lc app=leetcode.cn id=1991 lang=typescript
 *
 * [1991] 找到数组的中间位置
 */

// @lc code=start
// 前缀和：此题和 724 一致，由于题目提到要返回符合条件的「最左侧」中心下标，我们选择从左侧开始遍历寻找
// 先求所有值，注意中心下标是不应该包含在和计算之中的，所以移动时只需要记录当前下标之前的和（左侧和）
// 对比「所有值 - 当前值」是否等于「两倍的左侧和」，因为 s = l + r，所以 l = r，所以 s = 2l
function findMiddleIndex(nums: number[]): number {
  const total = nums.reduce((prev, cur) => prev + cur, 0)
  let leftSum = 0
  for (let i = 0; i < nums.length; i++) {
    if (total - nums[i] === 2 * leftSum) return i
    // 更新左侧和
    leftSum += nums[i]
  }

  return -1
}
// @lc code=end
