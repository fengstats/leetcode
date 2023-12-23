function createHelloWorld() {
  return function (...args): string {
    // 对，没错就是这样！
    return 'Hello World'
  }
}

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */
