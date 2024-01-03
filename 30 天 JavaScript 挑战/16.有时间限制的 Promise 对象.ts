type Fn = (...params: any[]) => Promise<any>

// 内部一个定时器执行规定时间，规定时间内如果 Promise.resolve 没有返回
// 那就返回 Promise.reject
function timeLimit(fn: Fn, t: number): Fn {
  return async function (...args) {
    return new Promise((resolve, reject) => {
      setTimeout(reject, t, 'Time Limit Exceeded')
      fn(...args)
        .then(resolve)
        .catch(reject)
    })
  }
}

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */
