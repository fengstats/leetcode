/*
 * @lc app=leetcode.cn id=34 lang=typescript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
// 二分：三个问题即可掌握二分，可以继续循环的条件是？mid 是否可能是答案？下一轮搜索是左还是右？
function searchRange(nums: number[], target: number): number[] {
  let left = 0
  let right = nums.length
  const ans = [-1, -1]

  // 找第一个位置
  while (left < right) {
    const mid = Math.floor((left + right) / 2)
    if (nums[mid] > target) {
      // 大于，舍弃右区间，下一轮向左搜索（因为 right 直接用的是数组长度而不是下标，所以这里无需 -1）
      right = mid
    } else if (nums[mid] < target) {
      // 小于，舍弃左区间，下一轮向右搜索
      left = mid + 1
    } else {
      ans[0] = mid
      // 因为可能有重复元素的原因，所以不一定是
      // 查找是第一个元素的起始位置，在此舍弃右区间，下一轮向左搜索即可
      // 待 left 与 right 重合时自己会退出循环，也说明找到了
      right = mid
    }
  }

  // 找最后一个位置
  // 重置指针，思路基本一致，在 nums[mid] 等于 target 时，有点小变动
  left = 0
  right = nums.length
  while (left < right) {
    const mid = Math.floor((left + right) / 2)
    if (nums[mid] > target) {
      right = mid
    } else if (nums[mid] < target) {
      left = mid + 1
    } else {
      ans[1] = mid
      // 舍弃左区间，下一轮往右搜索
      left = mid + 1
    }
  }

  return ans
}

// 暴力
// 思路：非递减数组（可能存在重复元素的升序数组）
function searchRange1(nums: number[], target: number): number[] {
  const res = [-1, -1]
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      if (res[0] === -1) res[0] = i
      res[1] = i
    }
  }

  return res
}
// @lc code=end
console.log(searchRange([0, 1, 2, 3, 4, 5, 6, 6, 6, 9], 6))
