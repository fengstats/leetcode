/*
 * @lc app=leetcode.cn id=35 lang=typescript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
// 二分（参考题解学习的）
// 思路：通过两个指针，一个左（left）一个右（right），找它们中间的数（mid）来与目标值比较的方式不断的收缩区间
// 需要注意几个点：可以继续循环的条件是？mid 是否可能是答案？下一轮搜索是左还是右？
function searchInsert(nums: number[], target: number): number {
  let left = 0
  let right = nums.length

  // [left..len]
  while (left < right) {
    // 区间之间的值，向下取整
    const mid = Math.floor((left + right) / 2)
    if (nums[mid] === target) {
      // 1. 刚好等于目标值，直接返回（因为题目特殊说明，无重复的数）
      return mid
    } else if (nums[mid] > target) {
      // 2. 大于目标值，但不一定是第一个大于的，所以要收缩右区间，下一轮向左搜索 [left..mid]
      // 这个值不一定是（保留），但这个值右边的值肯定都不是（丢掉）
      right = mid
    } else {
      // 3. 小于目标值，那肯定不是（丢掉），收缩左区间，下一轮向右搜索 [mid + 1..right]
      left = mid + 1
    }
  }

  return left
}
// @lc code=end

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
// function searchInsert(nums: number[], target: number): number {
//   const len = nums.length

//   // 条件判断
//   if (len === 0) return 0
//   if (len === 1) return target > nums[0] ? 1 : 0

//   // 找中位数
//   const middleIndex = Math.floor(len / 2)
//   const middle = nums[middleIndex]

//   let addIndex = 0
//   let insertIndex = -1
//   let arr

//   // 正好是这个
//   if (target === middle) return middleIndex

//   if (target < middle) {
//     // 左边
//     arr = nums.slice(0, middleIndex)
//   } else {
//     // 右边
//     arr = nums.slice(middleIndex)
//     // 加上原来中位数下标
//     addIndex += middleIndex
//   }

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === target) return addIndex + i
//     // 没找到需要插入
//     if (arr[i] > target && insertIndex === -1) insertIndex = addIndex + i
//   }

//   // -1 说明左边或者右边没找到，而且没有比它大的值
//   return insertIndex === -1 ? addIndex + arr.length : insertIndex
// }

// console.log(searchInsert([1, 2, 3, 4, 5, 6], 7)) // 6
// console.log(searchInsert([1, 2, 3, 4, 5, 6], 5)) // 4
// console.log(searchInsert([1, 2, 3, 4, 6], 5)) // 4
console.log(searchInsert([1, 3, 5, 6], 7))
