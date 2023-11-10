declare global {
  interface Array<T> {
    last(): T | -1
  }
}

// 这题我们可以有很多解法，比如常规 if 检查后返回 length-1 元素，或者直接调用原生数组 api
Array.prototype.last = function () {
  // 不能这么写，有个老六加了这样的测试用例 [null] 和 [undefined]，真是无语啦！
  // return this[this.length - 1] ?? -1

  // 1. slice: 提取数组最后一个元素返回，或者使用其默认参数 ES6 解构
  // return this.length ? this.slice(-1)[0] : -1
  // const [lastVal = -1] = this.slice(-1)
  // return lastVal

  // 2. ECMAScript 2021 引入，负整数从数组末尾开始计数
  // return this.length ? this.at(-1) : -1

  // 3. findLast: ECMAScript 2022 之后版本，用于查找数组中满足所提供测试函数的最后一个元素
  // 我们直接给测试函数返回 true，这样就可以直接拿到最后一个元素了
  // 需要注意：此解决方案可能在某些情况下不起作用，因为 findLast() 尚未得到广泛支持
  // return this.findLast(() => true)

  return this.length ? this[this.length - 1] : -1
}

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */

export {}

const arr = [undefined, null]
console.log(arr.last())
