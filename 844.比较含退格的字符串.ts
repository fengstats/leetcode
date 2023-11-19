/*
 * @lc app=leetcode.cn id=844 lang=typescript
 *
 * [844] 比较含退格的字符串
 */

// @lc code=start
// TODO: 逆向双指针

// 快慢双指针：正常的字符就向前走，遇到 # 字符
// 快指针向前走一步，慢指针则退一步，快指针位置给慢指针位置赋值即可
function backspaceCompare(s: string, t: string): boolean {
  const build = (str: string) => {
    const arr: string[] = Array.from(str)

    let left = 0
    let right = 0
    while (right < arr.length) {
      if (arr[right] === '#') {
        // NOTE: 退无可退了宝贝
        if (left > 0) left--
        right++
      } else {
        // NOTE: 之前被我是放到外面了，如果没有遇到连续的 # 字符用例没有问题
        // 若遇到连续的 # 字符就相当于 right 在往前走，left 一直在原地踏步
        // 一个人在规划着未来，而另一个却在计划着离开，肯定会出问题的！
        left++
        right++
      }
      // 在遇到了 # 字符之后才进行赋值
      if (right > left) arr[left] = arr[right]
    }

    // 通过 left 位置截断数组
    arr.length = left
    return arr.join('')
  }

  return build(s) === build(t)
}

// 栈：遍历两个字符串，遇到普通字符压入栈中，遇到 # 字符将栈顶弹出
// 最后将栈中的两个字符串还原对比
function backspaceCompare1(s: string, t: string): boolean {
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

console.log(backspaceCompare('ab##', 'c#d#'))
