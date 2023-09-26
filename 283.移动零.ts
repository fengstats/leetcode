/*
 * @lc app=leetcode.cn id=283 lang=typescript
 *
 * [283] 移动零
 */

// @lc code=start
/**
Do not return anything, modify nums in-place instead.
 */
// 暴力解题
// 思路：通过逆向 for 循环遍历数组（防止下标错乱的问题），遇到一个 0 就删掉，然后 push 给原数组
function moveZeroes(nums: number[]): void {
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === 0) {
      nums.splice(i, 1)
      nums.push(0)
    }
  }
}

// @lc code=end
const nums = [0, 1, 0, 3, 12]
moveZeroes(nums)
console.log(nums) // [1,3,12,0,0]
