/*
 * @lc app=leetcode.cn id=75 lang=typescript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
// 计数排序：因为数组中只包含 0 1 2 三种颜色，通过记录三种颜色出现次数
// 最后将三种颜色根据顺序 + 出现次数填入到数组中
function sortColors(nums: number[]): void {
  let red = 0
  let white = 0
  let blue = 0

  // 计数
  for (let num of nums) {
    switch (num) {
      case 0:
        red++
        break
      case 1:
        white++
        break
      case 2:
        blue++
        break
    }
  }

  // 赋值
  for (let i in nums) {
    if (red) {
      nums[i] = 0
      red--
    } else if (white) {
      nums[i] = 1
      white--
    } else {
      nums[i] = 2
      blue--
    }
  }
}
// @lc code=end

console.log(sortColors([2, 0, 2, 1, 1, 0]))
