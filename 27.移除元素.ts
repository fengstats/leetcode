/*
 * @lc app=leetcode.cn id=27 lang=typescript
 *
 * [27] 移除元素
 */

// @lc code=start

// 快慢双指针：按照题目要求，只需要把 val 元素位置用后续非 val 元素覆盖掉即可（和 283.移除零 基本一致）
// 快指针每次向后移动一步去找非 val 元素（新数组的组成元素）给慢指针位置赋值，遇到 val 元素则跳过
// 慢指针在原地等待快指针的值更新，更新一次指针向后移动一步继续等待
function removeElement(nums: number[], val: number): number {
  let fast = 0
  let slow = 0
  while (fast < nums.length) {
    if (nums[fast] !== val) {
      // 用条件判断替换无用赋值，当 fast 超过了 slow 时说明肯定已经跳过至少一次非 val 元素
      if (fast > slow) nums[slow] = nums[fast]
      slow++
    }
    fast++
  }

  return slow
}
// @lc code=end

console.log(removeElement([3, 2, 2, 3], 3))
