async function sleep(millis: number): Promise<void> {
  return new Promise((resolve) => {
    // 不需要返回内容，只需要等 millis 毫秒之后告诉它可以了就行
    setTimeout(resolve, millis)
  })
}

/**
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */
