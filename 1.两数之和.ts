/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */
// @lc code=start

// hashMap: 刷代码随想录刷到这题，再来写一遍
function twoSum(nums: number[], target: number): number[] {
  // key 存数值，value 存下标
  const numsMap = new Map()

  for (let i = 0; i < nums.length; i++) {
    // 判断之前存储的数值里面是否有可以组成两数之和的存在
    if (numsMap.has(target - nums[i])) {
      return [numsMap.get(target - nums[i]), i]
    }
    numsMap.set(nums[i], i)
  }

  return [-1, -1]
}

// 暴力解题：比双层 for 循环更好理解一点，写法更优雅（其实差不多……）
function twoSum3(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length - 1; ++i) {
    // 通过 indexOf 第二个参数 i+1 跳过自身（前面的数肯定都比较过了，再比较没有意义）
    // 直接向后面的子数组查找
    const diffIndex = nums.indexOf(target - nums[i], i + 1)
    if (diffIndex !== -1) return [i, diffIndex]
  }

  return [-1, -1]
}

// Map 解题
// 思路：通过 Map key 存储第一个数，Map value 存储其下标
// 通过 for 遍历其余的数（n），通过 target - n 的方式来找找 Map key 有没有对应上的
// 有，对应 Map 中所存储的下标 + 当前下标返回
// 无，以第一个数的方式继续存储，直到找到
function twoSum2(nums: number[], target: number): number[] {
  const len = nums.length
  const map = new Map<number, any>()
  for (let i = 0; i < len; i++) {
    const diff = target - nums[i]
    // NOTE: 第一次写的时候没考虑到可能为 0 的情况没有通过所有 case（这里的 res 为对应 Map 中所存储的下标）
    // if (res !== undefined) {
    // NOTE: 通过 has 增加可读性
    if (map.has(diff)) {
      return [map.get(diff), i]
    }
    map.set(nums[i], i)
  }
  return [-1, -1]
}

// 暴力解题
// 思路：双层遍历走天下！
function twoSum1(nums: number[], target: number): number[] {
  const len = nums.length
  // 这里写 len - 1 是因为在第一层 for 循环遍历到最后一个值时，已经在第二层循环内与其他数比较过了，无需再次遍历
  for (let i = 0; i < len - 1; i++) {
    // 第二层 for 循环从 i+1 开始，这样就不会出现自己和自己加起来刚好等于结果的情况
    for (let j = i + 1; j < len; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
  return [-1, -1]
}
// @lc code=end
// console.log(twoSum([2, 7, 7, 1, 3], 9))
console.log(twoSum([3, 2, 4], 6))
