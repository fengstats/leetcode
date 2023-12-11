/*
 * @lc app=leetcode.cn id=15 lang=typescript
 *
 * [15] 三数之和
 */

// @lc code=start

// 排序 + 双指针
function threeSum(nums: number[]): number[][] {
  const ans: number[][] = []

  // 原地升序
  nums.sort((a, b) => a - b)

  for (let i = 0; i < nums.length; i++) {
    // 先确定第一个数比如说 A
    const A = nums[i]
    // 如果排序后的第一个就大于 0，那就不可能有收获了，直接退出
    if (A > 0) break

    // NOTE: A 要去重，我们这里是选择和前一个做比较，直到找到一个符合条件的 A
    if (i > 0 && A === nums[i - 1]) continue

    // 确定 A 后分别从数组两端去找 L+C，L=left、R=right
    // 直到符合 A+L+R=0 的结果出现，收获即可
    let L = i + 1
    let R = nums.length - 1

    // NOTE: 这里是小于不是小于等于，等于的情况就相当于重合了，题目条件不符：i!=j、i!=k、j!=k
    while (L < R) {
      const target = A + nums[L] + nums[R]
      if (target === 0) {
        ans.push([A, nums[L], nums[R]])
        // NOTE: B、C 也要去重，不过要在至少收获一个结果之后
        // 想象一下这种数据：[0,0,0,0,0] 那一个结果都收获不了了
        while (nums[L] === nums[L + 1]) L++
        while (nums[R] === nums[R - 1]) R--

        // NOTE: 这里也要移动位置！！！不然就卡这里了
        // 忘记写导致内存溢出了…… VS Code 调试还是很好用的！
        L++
        R--
      } else if (target > 0) {
        // 太大了，收缩右边界
        R--
      } else {
        // 太小了
        L++
      }
    }
  }

  return ans
}
// @lc code=end
