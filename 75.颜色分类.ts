/*
 * @lc app=leetcode.cn id=75 lang=typescript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */

// 计数排序代码优化
function sortColors(nums: number[]): void {
  // 三种颜色对应 map 中的 key
  const map = new Map<number, number[]>([
    [0, []],
    [1, []],
    [2, []],
  ])

  for (let num of nums) map.get(num)?.push(num)

  // 将 Map 内的数组合并之后扁平化处理，最后赋值
  const colorArr = Array.from(map.values()).flat()
  for (let i in nums) nums[i] = colorArr[i]
}

// 计数排序：因为数组中只包含 0 1 2 三种颜色，通过记录三种颜色出现次数
// 最后将三种颜色根据顺序 + 出现次数填入到数组中
function sortColors1(nums: number[]): void {
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
