type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue }
type OnceFn = (...args: JSONValue[]) => JSONValue | undefined

// 优化写法，既然只能调用一次，那么调用后把函数销毁即可
function once(fn: Function): OnceFn {
  return function (...args) {
    const ans = fn(...args)
    fn = () => {}
    return ans
  }
}

function once1(fn: Function): OnceFn {
  let flag = true
  return function (...args) {
    if (flag) {
      flag = false
      return fn(...args)
    }
    return undefined
  }
}

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
