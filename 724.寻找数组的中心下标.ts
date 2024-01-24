/*
 * @lc app=leetcode.cn id=724 lang=typescript
 *
 * [724] 寻找数组的中心下标
 */

// @lc code=start

// 后缀和：先把数组所有和求出来（用于左右都可以，看从遍历方向）
// 然后逐步更新右侧数之和与左侧数之和用于对比
function pivotIndex(nums: number[]): number {
  let leftSum = 0
  let rightSum = nums.reduce((prev, cur) => prev + cur, 0)

  for (let i = 0; i < nums.length; i++) {
    // 注意：在这脑子卡了一下，应该是要先更新右侧和再比较（左侧至少要有一个元素作为中心下标）
    rightSum -= nums[i]
    if (leftSum === rightSum) return i
    leftSum += nums[i]
  }

  return -1
}
// @lc code=end
console.log(pivotIndex([1, 7, 3, 6, 5, 6]))
