/*
 * @lc app=leetcode.cn id=209 lang=typescript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
// 滑动窗口：双指针的一种，右指针每次向后移动一步扩大窗口，左指针等待窗口值大于等于 target 时缩小
// 因为两个指针的移动很像窗口，所以被称之为滑动窗口
function minSubArrayLen(target: number, nums: number[]): number {
  // 最小的子数组长度（默认无限大，因为要用 min 比较）
  // NOTE: 这里的无穷大也可以使用 nums 长度替代，毕竟子数组不可能比原数组长
  let ans = Infinity
  // 当前子数组数值之和
  let subSum = 0
  // 起始位置
  let left = 0
  // 终止位置
  let right = 0

  while (right < nums.length) {
    // NOTE: 子数组之和要先更新，起始位置移动是根据这个值进行的，如果放在后面，可能会出现：
    // 加上最后一个值是大于 target 的情况，但根据条件会直接退出最外层循环，导致起始位置不能正常被更新
    subSum += nums[right]
    // 更新子数组数值与长度，移动起始位置，对比最小子数组长度
    // NOTE: 这里是 while 循环，需要移动到不能移动为止
    while (subSum >= target) {
      // 直接用「终止位置 - 起始位置 + 1」就能得到当前子数组长度，省去一个变量记录与更新
      ans = Math.min(ans, right - left + 1)
      subSum -= nums[left]
      left++
    }
    // 更新终止位置
    right++
  }

  return ans === Infinity ? 0 : ans
}
// @lc code=end
console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]))
