type Fn = (...params: any[]) => Promise<any>

// Promise.race 接收一个 promise 数组，谁快谁先返回
function timeLimit(fn: Fn, t: number): Fn {
  return async function (...args) {
    const error = new Promise((_, reject) => setTimeout(reject, t, 'Time Limit Exceeded'))
    // fn 函数本身就返回一个 promise 对象
    return Promise.race([error, fn(...args)])
  }
}

// 内部一个定时器执行规定时间，规定时间内如果 Promise.resolve 没有返回
// 那就返回 Promise.reject
function timeLimit1(fn: Fn, t: number): Fn {
  return async function (...args) {
    return new Promise((resolve, reject) => {
      const timeoutId = setTimeout(reject, t, 'Time Limit Exceeded')
      fn(...args)
        .then(resolve)
        .catch(reject)
        // NOTE: 良好习惯，清理定时器
        .finally(() => clearInterval(timeoutId))
    })
  }
}

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */
