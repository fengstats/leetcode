/*
 * @lc app=leetcode.cn id=454 lang=typescript
 *
 * [454] 四数相加 II
 */

// @lc code=start

// TODO: 后续回来自己再做一遍，这是参考题解理解后写的，还是有点抄的意思。

// hashMap: 把 nums1 + nums2 内的值以 { num1+num2: 出现次数 } 的方式存储
// 遍历 nums3 + nums4 统计 (num1+num2)+(num3+num4) = 0 的次数
function fourSumCount(nums1: number[], nums2: number[], nums3: number[], nums4: number[]): number {
  let count = 0
  const numsMap = new Map()

  for (let num1 of nums1) {
    for (let num2 of nums2) {
      const sum = num1 + num2
      if (!numsMap.has(sum)) numsMap.set(sum, 0)
      numsMap.set(sum, numsMap.get(sum) + 1)
    }
  }

  // 统计
  for (let num3 of nums3) {
    for (let num4 of nums4) {
      // (num1+num2) + (num3+num4) = 0
      // 可以转换位 0 - (num3+num4) = (num1+num2)
      const findNum = 0 - (num3 + num4)
      if (numsMap.has(findNum)) {
        // NOTE: 注意这里加的是 value 不是 1
        count += numsMap.get(findNum)
      }
    }
  }

  return count
}
// @lc code=end
