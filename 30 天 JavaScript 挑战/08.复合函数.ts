type F = (x: number) => number

function compose(functions: F[]): F {
  // return function (x) {
  //   // 返回所有函数处理之后的 x
  //   functions.forEach((func) => (x = func(x)))
  //   return x
  // }
  // NOTE: 需要从右往左计算
  return (x) => functions.reduceRight((prev, func) => func(prev), x)
}

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */
