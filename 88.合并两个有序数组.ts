/*
 * @lc app=leetcode.cn id=88 lang=typescript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
  Do not return anything, modify nums1 in-place instead.
 */
// 思路：利用题目所提两个数组皆为非递减顺序数组（升序）且 num1 长度为 m + n
// 尾部空余空间使用 0 填充这些条件，想在不影响原始值的情况下进行 num1 原地更改：
// 1. 使用两个指针在两个数组的尾部值做比较
// 2. 将对比结果更大的值扔到 num1 的尾部，然后把对应数组使用的指针往前移动一位
// 3. 以此类推直到 num1 所有值更新完成（end === -1）
// 需要注意：因为我写的循环条件是基于 end 指针值的，在对比更新时需要考虑 m 和 n 的边界问题（为 -1 的情况），恶心死了
// 后续补充：看了眼题解，原来我的解法叫逆向双指针！！！不过我貌似用了三个指针，看来双指针我已熟练掌握
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  // 方便操作下标使用
  let end = m + n - 1
  m--
  n--

  while (end >= 0) {
    if ((m >= 0 && n === -1) || nums1[m] >= nums2[n]) {
      nums1[end] = nums1[m]
      m--
    } else {
      nums1[end] = nums2[n]
      n--
    }
    end--
  }
}
// @lc code=end

let nums1 = [1],
  m = 1,
  nums2: number[] = [],
  n = 0
// let nums1 = [-1, 0, 0, 3, 3, 3, 0, 0, 0],
//   m = 6,
//   nums2: number[] = [1, 2, 2],
//   n = 3
// let nums1 = [1, 2, 3, 0, 0, 0],
//   m = 3,
//   nums2: number[] = [2, 5, 6],
//   n = 3
merge(nums1, m, nums2, n)

console.log(nums1)
