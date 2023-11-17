/*
 * @lc app=leetcode.cn id=844 lang=typescript
 *
 * [844] 比较含退格的字符串
 */

// @lc code=start
// 栈：遍历两个字符串，遇到普通字符压入栈中，遇到 # 字符将栈顶弹出
// 最后将栈中的两个字符串还原对比
function backspaceCompare(s: string, t: string): boolean {
  // 因为两个字符串要做的事情其实是一样的，这里抽离成函数使用
  const build = (str: string) => {
    const arr: string[] = []

    for (let char of str) {
      if (char !== '#') arr.push(char)
      else arr.pop()
    }

    return arr.join('')
  }

  return build(s) === build(t)
}
// @lc code=end
