type P = Promise<number>

async function addTwoPromises(promise1: P, promise2: P): P {
  const [n1, n2] = await Promise.all([promise1, promise2])
  return n1 + n2
}

// 简单粗暴但是要等两个 Promise 的时间
// 这里理解是对的，但是 new Promise 构造函数会立即执行
// 这种定义 Promise 传参相当于内部已经执行了，具体看我下面写的 run 函数例子
async function addTwoPromises1(promise1: P, promise2: P): P {
  const num1 = await promise1
  console.log('222')
  const num2 = await promise2
  console.log('333')
  return Promise.resolve(num1 + num2)
}

// NOTE: 定义 new Promise 内部函数立即执行了
// 也就是我 await 只是拿到了 Promise.resolve 的值而已，此时延时器可能已经结束掉了
// 这就是为什么两个 2s 的 Promise 在我分别 await 后，2s 后同时打印了结果
async function run() {
  const a = new Promise((resolve) => {
    console.log('第一个 Promise 被调用')
    setTimeout(() => resolve(10), 2000)
  })
  const b = new Promise((resolve) => {
    console.log('第二个 Promise 被调用')
    setTimeout(() => resolve(20), 2000)
  })
  const aMsg = await a
  console.log(aMsg)
  const bMsg = await b
  console.log(bMsg)
}

// NOTE: 这种情况就会正常的等第一个 Promise 结束，执行第二个 Promise
// 因为压根就没到 Promise executor 函数
async function run2() {
  const a = await new Promise((resolve) => {
    setTimeout(() => {
      resolve('111')
    }, 2000)
  })
  console.log(a)
  const b = await new Promise((resolve) => {
    setTimeout(() => {
      resolve('222')
    }, 2000)
  })
  console.log(b)
}

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */

addTwoPromises(
  new Promise((resolve) => setTimeout(() => resolve(10), 5000)),
  new Promise((resolve) => setTimeout(() => resolve(20), 5000)),
).then(console.log)

let count = 0
const printCount = () => {
  console.log(++count)
  if (count === 5) {
    clearInterval(timer)
  }
}
const timer = setInterval(printCount, 1000)
printCount()

export {}
