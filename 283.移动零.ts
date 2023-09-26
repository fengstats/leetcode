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
// function moveZeroes(nums: number[]): void {
//   for (let i = nums.length - 1; i >= 0; i--) {
//     if (nums[i] === 0) {
//       nums.splice(i, 1)
//       nums.push(0)
//     }
//   }
// }

// 双指针
// 思路：通过两个指针，一个快一个慢，“快”找非 0，“慢”呆在原地等，当“快”找到非 0 时与“慢”的交换值
// 并让“慢”向后移动一位并等待下次交换，一次循环结束你会发现 0 都被换到后面去了
function moveZeroes(nums: number[]): void {
  // 要求检查
  if (nums.length === 0) return

  let fast = 0
  let slow = 0
  for (fast; fast < nums.length; fast++) {
    if (nums[fast] !== 0) {
      // 优化：在进行交换时，慢指针对应的值应该为 0（快指针应领先于慢指针）
      // 避免出现两个指针在同一个位置产生交换的问题，比如前面的值都是非 0，两个指针会一起走，一直换
      // 这样能少一些无用交换，还能优化一下赋值处理，直接给快指针对应的值赋值为 0，而无需数组解构
      // if (nums[slow] === 0) {
      if (fast > slow) {
        // 通过数组解构赋值的方式来交换数组元素
        // ;[nums[fast], nums[slow]] = [nums[slow], nums[fast]]
        nums[slow] = nums[fast]
        nums[fast] = 0
      }
      slow++
    }
  }
}

// @lc code=end
// const nums = [0, 1, 0, 3, 12]
const nums = [1, 2, 0, 3, 12]
moveZeroes(nums)
console.log(nums) // [1,3,12,0,0]
