/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  const len = nums.length
  // 这里写 len - 1 是因为当一层 for 循环遍历到最后一个值时，已经通过第二层循环里面比较过了，不需要再次遍历
  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
  return [-1, -1]
}
// @lc code=end
console.log(twoSum([2, 3, 7, 1, 3], 10))
