type Fn<T> = () => Promise<T>

function promiseAll<T>(functions: Fn<T>[]): Promise<T[]> {
  return new Promise((resolve, reject) => {
    const resArr: T[] = new Array().fill(functions.length)
    let resCount = 0
    functions.forEach(async (fn, i) => {
      try {
        const res = await fn()
        // NOTE: 题目对 resolve 结果有要求，需要按照在 functions 中的顺序返回
        resArr[i] = res
        if (++resCount === functions.length) {
          // 所有异步函数执行完毕
          resolve(resArr)
        }
      } catch (err) {
        // 出现一个错误停止执行立即返回
        reject(err)
      }
    })
  })
}

const promise = promiseAll([
  () => new Promise((res) => res(0)),
  () => new Promise((res) => setTimeout(res, 2000, 2000)),
  () => new Promise((res) => setTimeout(res, 5000, 5000)),
])
promise.then(console.log) // [42]

let count = 0
const printCount = () => {
  console.log(count + 's')
  if (count++ === 10) {
    clearInterval(timer)
  }
}
const timer = setInterval(printCount, 1000)
printCount()
