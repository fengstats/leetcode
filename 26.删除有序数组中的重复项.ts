/*
 * @lc app=leetcode.cn id=26 lang=typescript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start

// 2023-12-20 再战双指针
function removeDuplicates(nums: number[]): number {
  let slow = 0
  let fast = 0
  // NOTE: 先走快指针必然越界，所以更改条件为 < length - 1
  // 相当于在倒数第二个值时就校验完数组了
  while (fast < nums.length - 1) {
    // 快指针找不同项
    fast++
    if (nums[fast] !== nums[slow]) {
      // NOTE: 至少要保留一个重复项，所以慢指针需先走一步再赋值
      slow++
      nums[slow] = nums[fast]
    }
  }

  // slow 是下标，需转换为个数
  return slow + 1
}

// 双指针：因为题目是有序数组的特性，可以定义快指针和慢指针，快指针用于在前面找和慢指针不一样的值
// 找到了就让慢指针向前走一步并赋值，然后继续找，直到快指针遍历到结尾，最后返回慢指针加一（新数组长度）
function removeDuplicates2(nums: number[]): number {
  if (!nums.length) return 0

  let fast = 0
  let slow = 0
  while (fast < nums.length) {
    if (nums[fast] !== nums[slow]) nums[++slow] = nums[fast]
    ++fast
  }

  return slow + 1
}

// 暴力
function removeDuplicates1(nums: number[]): number {
  // 去重
  const arr = Array.from(new Set(nums))
  // 赋值
  for (let [i, val] of arr.entries()) nums[i] = val

  return arr.length
}
// @lc code=end
console.log(removeDuplicates([1, 1, 2]))
