type F = (...args: number[]) => void

function debounce(fn: F, t: number): F {
  let timeoutId: NodeJS.Timeout
  return function (...args) {
    timeoutId && clearTimeout(timeoutId)
    timeoutId = setTimeout(fn, t, ...args)
  }
}

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */
