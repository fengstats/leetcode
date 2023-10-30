/*
 * @lc app=leetcode.cn id=189 lang=typescript
 *
 * [189] 轮转数组
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
// 暴力：根据向右轮转的次数 k（可能超出数组长度所以需要取余处理），依次遍历删除尾部插入到头部
function rotate(nums: number[], k: number): void {
  const len = nums.length
  if (!len) return undefined

  // 轮转次数
  let count = k % len
  while (count) {
    // pop 输出可能为 undefined，给个 0 兜底（就算遇到真 0 的情况也会返回 0）
    nums.unshift(nums.pop() || 0)
    count--
  }
}
// @lc code=end

console.log(rotate([2147483647, -2147483648, 33, 219, 0], 4))
