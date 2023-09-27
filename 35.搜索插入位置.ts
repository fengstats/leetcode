/*
 * @lc app=leetcode.cn id=35 lang=typescript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
// 暴力
// function searchInsert(nums: number[], target: number): number {
//   const len = nums.length
//   for (let i = 0; i < len; i++) {
//     if (nums[i] >= target) return i
//   }

//   // 到这里要么是空数组，要么是就是在数组里没找到，直接返回数组长度即可
//   return len
// }

// 思路：数组是一个没有重复元素的升序排序数组，先找数组的中位数，判断目标值是在左边或者右边，选一边进行遍历
// 存在，返回其下标
// 不存在，找到第一个大于目标值的数，返回其下标
function searchInsert(nums: number[], target: number): number {
  const len = nums.length

  // 条件判断
  if (len === 0) return 0
  if (len === 1) return target > nums[0] ? 1 : 0

  // 找中位数
  const middleIndex = Math.floor(len / 2)
  const middle = nums[middleIndex]

  let addIndex = 0
  let insertIndex = -1
  let arr

  // 正好是这个
  if (target === middle) return middleIndex

  if (target < middle) {
    // 左边
    arr = nums.slice(0, middleIndex)
  } else {
    // 右边
    arr = nums.slice(middleIndex)
    // 加上原来中位数下标
    addIndex += middleIndex
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return addIndex + i
    // 没找到需要插入
    if (arr[i] > target && insertIndex === -1) insertIndex = addIndex + i
  }

  // -1 说明左边或者右边没找到，而且没有比它大的值
  return insertIndex === -1 ? addIndex + arr.length : insertIndex
}
// @lc code=end
// console.log(searchInsert([1, 2, 3, 4, 5, 6], 7)) // 6
// console.log(searchInsert([1, 2, 3, 4, 5, 6], 5)) // 4
// console.log(searchInsert([1, 2, 3, 4, 6], 5)) // 4
// console.log(searchInsert([1, 3, 5], 4))
// console.log(searchInsert([1], 0))
// console.log(searchInsert([1, 3, 5, 6], 2))
// console.log(searchInsert([1, 3], 2))
