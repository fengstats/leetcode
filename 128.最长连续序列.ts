/*
 * @lc app=leetcode.cn id=128 lang=typescript
 *
 * [128] 最长连续序列
 */

// @lc code=start
// 排序：思路差不多，只是变成了一个有序数组而已，不过时间和内存都要比单独哈希集合占用更多
function longestConsecutive(nums: number[]): number {
  // 去重 + 排序
  const ascendingArr = [...new Set(nums)].sort((a, b) => a - b)
  let maxLen = 0
  let count = 1

  for (let i = 0; i < ascendingArr.length; ++i) {
    // 当前连续序列长度 +1
    if (ascendingArr[i] + 1 === ascendingArr[i + 1]) count++
    // 遇到不是连续序列的值，比较已存储连续序列长度，重置序列长度
    else {
      maxLen = Math.max(count, maxLen)
      count = 1
    }
  }

  return maxLen
}

// 哈希集合（hashSet）
// 思路：通过集合存储数组内的数字，遍历集合，判断当前数字是否是连续序列的起点
// 若是，继续向后遍历，直到连续序列结束
// 否则，跳过这个数字，遍历下一个
function longestConsecutive1(nums: number[]): number {
  const set = new Set(nums)
  let maxLen = 0

  for (const num of set) {
    // 不是起点，跳过
    if (set.has(num - 1)) continue

    // 可能是起点，记录当前数字（用于 while 条件）
    let curNum = num
    // 记录当前连续序列长度（当前值就是第一个，所以默认为 1）
    let count = 1
    while (set.has(curNum + 1)) {
      // 存在连续序列
      curNum++
      count++
    }

    // 与之前的序列长度进行比较取出最大值
    maxLen = Math.max(maxLen, count)
  }

  return maxLen
}
// @lc code=end
console.log(longestConsecutive([100, 4, 200, 1, 3, 2]))
