type Fn = (...params: number[]) => number

// hashMap
function memoize(fn: Fn): Fn {
  // NOTE: 注意给每个不同的函数创建一个 map
  const map = new Map<string, number>()
  return function (...args) {
    const key = JSON.stringify(args)
    if (!map.has(key)) {
      map.set(key, fn(...args))
    }
    // NOTE: 好吧，今天才知道还可以用类型断言告诉编辑器一定是某个类型 😢
    return map.get(key) as number
  }
}

let callCount = 0
const memoizedFn = memoize(function (a, b) {
  callCount += 1
  return a + b
})
console.log(memoizedFn(2, 3)) // 5
console.log(memoizedFn(2, 3)) // 5
console.log(callCount) // 1
