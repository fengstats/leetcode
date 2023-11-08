// 字符串有三种编辑操作：插入一个英文字符、删除一个英文字符或者替换一个英文字符
// 给定两个字符串，编写一个函数判定它们是否只需要一次（或者零次）编辑

// 示例
// 输入:
// first = "pale"
// second = "ple"
// 输出: True

// 先处理一些固定情况
// - 内容完全相等，返回成功
// - 长度差超过 1，返回失败
// 题目提到了三种编辑，我们一个个来看：
// - 替换：只有两个字符串长度相同时才能达成，单个字符对比，出现错误时，截取剩余字符串对比
// - 删除和插入：两者其实是一个东西，只有在长度差为 1 的时候达成，对长的删除，对短的插入
// 在实际代码中选择一种代码实现即可，这里使用对长的删除，也就是出现错误时，将长字符串跳过
// 一个字符之后截取，与另一个字符串剩余字符对比
function oneEditAway(first: string, second: string): boolean {
  if (first === second) return true
  if (Math.abs(first.length - second.length) > 1) return false

  // 遍历长的短的都无所谓
  for (let i = 0; i < first.length; ++i) {
    if (first[i] !== second[i]) {
      // 替换
      if (first.length === second.length) return first.substring(i + 1) === second.substring(i + 1)
      // 删除与插入
      if (first.length > second.length) return first.substring(i + 1) === second.substring(i)
      else return first.substring(i) === second.substring(i + 1)
    }
  }

  return true
}

console.log(oneEditAway('b', 'c'))
