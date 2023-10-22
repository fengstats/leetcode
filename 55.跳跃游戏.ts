/*
 * @lc app=leetcode.cn id=55 lang=typescript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
// 贪心：记录能到的最远距离
// 当前已跳跃步数大于最远距离，说明这个位置是到不了的，返回 false
// 当前位置可跳跃步数 + 已跳跃步数（下标）大于之前记录的最远距离，更新最远距离
// 最远距离大于等于数组长度 - 1 时，肯定能到了，返回 true
// 最后遍历结束但程序还没结束的话，返回 false
function canJump(nums: number[]): boolean {
  if (!nums.length) return false

  let maxDistance = 0
  for (let i = 0; i < nums.length; ++i) {
    if (i > maxDistance) return false
    // 更新最远距离
    maxDistance = Math.max(maxDistance, nums[i] + i)
    if (maxDistance >= nums.length - 1) return true
  }

  return false
}
// @lc code=end
console.log(canJump([3, 2, 1, 0, 4]))
