/*
 * @lc app=leetcode.cn id=18 lang=typescript
 *
 * [18] 四数之和
 */

// @lc code=start
// 双指针：思路和三数之和差不多，麻烦点就是要多确定一个值，也要做剪枝和去重
// 剪枝：搜索算法中通过条件判断提前终止某些分支搜索过程，从而减少搜索空间，避免不必要的计算，提高算法效率。
function fourSum(nums: number[], target: number): number[][] {
  const ans: number[][] = []

  nums.sort((a, b) => a - b)

  // 第一层确定第一个值
  for (let one = 0; one < nums.length; one++) {
    // 剪枝：≥ 0 是防止出现 target 为负数的情况，两个负数相加可以更小
    if (nums[one] > target && nums[one] >= 0) break
    // NOTE: 向前对比去重
    if (one > 0 && nums[one] === nums[one - 1]) continue

    // 第二层确定第二个值
    for (let two = one + 1; two < nums.length; two++) {
      const combineNum = nums[one] + nums[two]
      // 剪枝
      if (combineNum > target && combineNum >= 0) break
      // 去重
      if (two > one + 1 && nums[two] === nums[two - 1]) continue

      // 通过双指针确定第三个值和第四个值
      let three = two + 1
      let four = nums.length - 1
      while (three < four) {
        const resNum = nums[one] + nums[two] + nums[three] + nums[four]
        if (resNum === target) {
          ans.push([nums[one], nums[two], nums[three], nums[four]])
          // NOTE: 看情况去重，three 向后，four 向前
          while (nums[three] === nums[three + 1]) three++
          while (nums[four] === nums[four - 1]) four--
          three++
          four--
        } else if (resNum < target) {
          three++
        } else {
          four--
        }
      }
    }
  }

  return ans
}
// @lc code=end

console.log(fourSum([-2, -1, 0, 0, 1, 2], 0))
