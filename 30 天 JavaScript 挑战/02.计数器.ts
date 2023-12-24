function createCounter(n: number): () => number {
  return function () {
    // 什么时候开始上强度啊！
    return n++
  }
}

/**
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */
