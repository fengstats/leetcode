/*
 * @lc app=leetcode.cn id=167 lang=typescript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
// 双指针秒了，定义一个头指针 a 和尾指针 b，设目标值为 t
// t - b === a，直接返回各自加一的下标（题目描述下标起始为 1）
// t - b > a，说明 a 不够大，头指针向后移动一位
// t - b < a，说明 b 太大了，尾指针向前移动一位
function twoSum(numbers: number[], target: number): number[] {
  let start = 0
  let end = numbers.length - 1

  while (start < end) {
    const num = target - numbers[end]
    if (num === numbers[start]) return [++start, ++end]
    else if (num > numbers[start]) start++
    else end--
  }

  // 出现 start 大于等于 end 的情况说明根本没有有效答案
  return [-1, -1]
}
// @lc code=end
