/*
 * @lc app=leetcode.cn id=26 lang=typescript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
// 双指针：因为题目是有序数组的特性，可以定义快指针和慢指针，快指针用于在前面找和慢指针不一样的值
// 找到了就让慢指针向前走一步并赋值，然后继续找，直到快指针遍历到结尾，最后返回慢指针加一（新数组长度）
function removeDuplicates(nums: number[]): number {
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
