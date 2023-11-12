/*
 * @lc app=leetcode.cn id=541 lang=typescript
 *
 * [541] 反转字符串 II
 */

// @lc code=start
// 从 0 开始，反转前 k 个字符，然后跳过 2k 个字符，重复操作，直到遍历结束
function reverseStr(s: string, k: number): string {
  if (!s) return ''

  // 自己实现数组的原地反转（调用原生 api 需要先找反转的部分最后拼回去，感觉有点麻烦）
  const reverse = (arr: string[], left: number, right: number): void => {
    while (left < right) [arr[left++], arr[right--]] = [arr[right], arr[left]]
  }

  // 转成字符数组（方便反转操作）
  const arr = Array.from(s)

  let left = 0
  while (left < arr.length) {
    // 因为是下标计数，右边界需要 -1，防止越界
    const right = Math.min(left + k, arr.length) - 1
    reverse(arr, left, right)
    // 跳过 2k（left 包含了已经反转的 k 个字符）
    left += 2 * k
  }

  return arr.join('')
}

// @lc code=end
console.log(reverseStr('abcdefg', 2))
