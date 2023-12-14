/*
 * @lc app=leetcode.cn id=541 lang=typescript
 *
 * [541] 反转字符串 II
 */

// @lc code=start

// 2023-12-14 再刷一遍
function reverseStr(s: string, k: number): string {
  // 转换成字符数组
  const arr = Array.from(s)

  // 反转函数
  function reverse(arr, left, right) {
    while (left < right) {
      // 临时变量交换两值
      const tmp = arr[left]
      arr[left] = arr[right]
      arr[right] = tmp
      left++
      right--
    }
  }

  // 以 2k 为一次处理节点，处理前 k 个字符进行反转
  for (let left = 0; left < arr.length; left += 2 * k) {
    // NOTE: 剩余字符少于 k 个的情况，right 不能越界，否则交换的值会异常
    // NOTE: 反转函数中 right 为左必右必的，所以要 -1
    reverse(arr, left, Math.min(left + k, arr.length) - 1)
  }

  return arr.join('')
}

// 从 0 开始，反转前 k 个字符，然后跳过 2k 个字符，重复操作，直到遍历结束
function reverseStr1(s: string, k: number): string {
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
