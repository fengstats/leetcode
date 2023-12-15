/*
 * @lc app=leetcode.cn id=151 lang=typescript
 *
 * [151] 反转字符串中的单词
 */

// @lc code=start

// api 工程师直接秒了！
function reverseWords(s: string): string {
  return s
    .split(' ')
    .filter((item) => item)
    .reverse()
    .join(' ')
}

// 快慢双指针：去除多余空格
// 反转函数：先把字符串整体反转，然后处理单个单词反转
function reverseWords2(s: string): string {
  if (!s) return ''
  // 反转函数
  const reverse = (arr: string[], left, right) => {
    while (left < right) [arr[left++], arr[right--]] = [arr[right], arr[left]]
  }

  // 1. 字符串转数组（js 不支持直接操作字符串原地更改）
  const strList = Array.from(s)

  // 2. 快指针找非空字符并赋值给慢指针位置（找单词，去空格）
  let slow = 0
  let fast = 0
  while (fast < strList.length) {
    if (strList[fast] !== ' ') {
      // 除了刚开始第一个单词，在找往后每个单词时，需要添加一个空格作为分隔
      if (slow !== 0 && strList[fast - 1] === ' ') strList[slow++] = ' '
      strList[slow++] = strList[fast]
    }
    fast++
  }
  // 处理尾部空格（直接通过 length 截断）
  strList.length = slow

  // 3. 反转整体字符串数组
  reverse(strList, 0, strList.length - 1)

  // 4. 单个单词反转（单指针临时存个位置）
  let pos = 0
  let i = 0
  // 写个正常遍历找空格，找到之后处理单指针到空格前一个位置的反转
  // 这里允许 i 等于 length 是因为我们要单独处理最后一个单词
  while (i <= strList.length) {
    // 最后一个单词单独写条件
    if (strList[i] === ' ' || i === strList.length) {
      reverse(strList, pos, i - 1)
      // 把单指针的位置移动到下一个单词开头下标，以此类推
      pos = i + 1
    }
    i++
  }

  // 5. 返回拼接字符串
  return strList.join('')
}

// 正则 + 双指针
function reverseWords1(s: string): string {
  if (!s) return ''

  // 1. 通过正则将有效单词匹配出来并返回数组形式
  const wordList = s.match(/[a-zA-Z0-9]+/g) || []

  // 2. 左右双指针向中间移动，一一换位反转
  let left = 0
  let right = wordList.length - 1
  while (left < right) [wordList[left++], wordList[right--]] = [wordList[right], wordList[left]]

  // 3. 空格分隔，合并返回
  return wordList.join(' ')
}
// @lc code=end
