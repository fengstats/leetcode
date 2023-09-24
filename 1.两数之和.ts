/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
// 暴力解题
// 思路：双层遍历走天下！
// function twoSum(nums: number[], target: number): number[] {
//   const len = nums.length
//   // 这里写 len - 1 是因为在第一层 for 循环遍历到最后一个值时，已经在第二层循环内与其他数比较过了，无需再次遍历
//   for (let i = 0; i < len - 1; i++) {
//     for (let j = i + 1; j < len; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j]
//       }
//     }
//   }
//   return [-1, -1]
// }

// Map 解题
// 思路：通过 Map key 存储第一个数，Map value 存储其下标
// 通过 for 遍历其余的数（n），通过 target - n 的方式来找找 Map key 有没有对应上的
// 有，Map 中所存储的下标 + 当前下标返回
// 无，以第一个数的方式继续存储，直到找到
function twoSum(nums: number[], target: number): number[] {
  const len = nums.length
  const map = new Map<number, number>()
  for (let i = 0; i < len; i++) {
    const res = map.get(target - nums[i])
    // NOTE: 第一次写的时候没考虑到可能为 0 的情况没有通过所有 case
    if (res !== undefined) {
      return [res, i]
    }
    map.set(nums[i], i)
  }
  return [-1, -1]
}
// @lc code=end
console.log(twoSum([2, 7, 7, 1, 3], 9))
