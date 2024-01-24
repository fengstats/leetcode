/*
 * @lc app=leetcode.cn id=977 lang=typescript
 *
 * [977] 有序数组的平方
 */

// @lc code=start

// 解题思路与 88.合并两个有序数组 这题用的逆向双指针非常像
// 双指针：根据题目数组特性（升序且包含负数），要我们返回所有元素的平方并且顺序为升序
// 首先要知道影响数组平方后排序的值是什么？在这里就是负数了，升序数组负数平方后的大小
// 方向将会被调转，这样两端就变成了 大 -> 小 <- 大，从两端开始处理数据一一比较然后
// 向中间靠拢，通过一个新数组从尾部开始存储比较后更大的值，直到数组被填满
function sortedSquares(nums: number[]): number[] {
  let left = 0
  let right = nums.length - 1
  // 方便统计是否更新完毕
  let len = nums.length
  const ans = new Array(nums.length).fill(0)

  while (len-- >= 0) {
    const lNum = nums[left]
    const rNum = nums[right]

    // 左侧可能是负数所以需要取绝对值，其实右侧也有可能是负数，什么不用绝对值呢？
    // 因为数组是升序的，同为负数的情况，左侧负数平方肯定大于右侧，没必要
    if (Math.abs(lNum) >= rNum) {
      ans[len] = lNum ** 2
      left++
    } else {
      ans[len] = rNum ** 2
      right--
    }
  }

  return ans
}
// @lc code=end
