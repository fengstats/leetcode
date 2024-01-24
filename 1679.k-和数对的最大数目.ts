/*
 * @lc app=leetcode.cn id=1679 lang=typescript
 *
 * [1679] K 和数对的最大数目
 */

// @lc code=start

// 双指针：先升序排序原数组，定义头尾指针数值相加与 k 进行比对
// - 相同，记录可执行操作加一
// - 小了，头指针向后移动
// - 大了，尾指针向前移动
function maxOperations(nums: number[], k: number): number {
  nums.sort((a, b) => a - b)
  let count = 0
  let start = 0
  let end = nums.length - 1

  while (start < end) {
    // 减法代替加法（防溢出）
    const target = k - nums[end]
    if (target === nums[start]) {
      count++
      start++
      end--
    } else if (target > nums[start]) {
      start++
    } else {
      end--
    }
  }

  return count
}
// @lc code=end
console.log(maxOperations([1, 2, 3, 4], 5))
