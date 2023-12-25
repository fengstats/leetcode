type Counter = {
  increment: () => number
  decrement: () => number
  reset: () => number
}

// 局部变量
function createCounter(init: number): Counter {
  // 只有第一次调用函数的时候会执行 n 的赋值
  let n = init
  return {
    increment: () => ++n,
    decrement: () => --n,
    // 先初始化 n 然后返回，最后返回的是 init 的值（一直没动这个值）
    reset: () => (n = init),
  }
}

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
