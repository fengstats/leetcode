/*
 * @lc app=leetcode.cn id=189 lang=typescript
 *
 * [189] 轮转数组
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
// 拼接法：将原数组 x 2 存放到一个新数组中，通过 k 来找到轮转的起始位置（len-k）
// 从该位置开始依次赋值给原数组
function rotate(nums: number[], k: number): void {
  const len = nums.length
  if (len <= 1) return undefined

  const arr = [...nums, ...nums]
  let startIndex = len - (k % len)
  for (let index in nums) nums[index] = arr[startIndex++]
}

// 暴力：根据向右轮转的次数 k（可能超出数组长度所以需要取余处理），依次遍历删除尾部插入到头部
function rotate1(nums: number[], k: number): void {
  const len = nums.length
  if (len <= 1) return undefined

  // 轮转次数
  let count = k % len
  while (count) {
    // pop 输出可能为 undefined，给个 0 兜底（就算遇到真 0 的情况也会返回 0）
    nums.unshift(nums.pop() || 0)
    count--
  }
}
// @lc code=end
