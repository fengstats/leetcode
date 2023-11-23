/*
 * @lc app=leetcode.cn id=54 lang=typescript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start

// 技巧：其实就是顺时针打印二维数组的值
// 按照 左->右、上->下、右->左、下->上 的顺序循环处理，直到所有值被打印完毕
// 核心在于边界与已经打印过的值如何处理，边界收缩时需要判断 左>右、上>下，来退出外层循环
function spiralOrder(matrix: number[][]): number[] {
  // 行
  let top = 0
  let bottom = matrix.length - 1
  // 列
  let left = 0
  let right = matrix[0].length - 1
  // NOTE: -1 是为了方便直接操作下标

  const ans: number[] = []

  while (true) {
    // 上、右、下、左，思考好需要打印的行和列是什么就可以了
    // 左 -> 右，行不变，列改变
    for (let i = left; i <= right; i++) ans.push(matrix[top][i])
    // 收缩上边界并检查是否可退出
    if (++top > bottom) break
    // 上 -> 下，列不变，行改变
    for (let i = top; i <= bottom; i++) ans.push(matrix[i][right])
    if (left > --right) break
    // 右 -> 左
    for (let i = right; i >= left; i--) ans.push(matrix[bottom][i])
    if (top > --bottom) break
    // 下 -> 上
    for (let i = bottom; i >= top; i--) ans.push(matrix[i][left])
    if (++left > right) break
  }

  return ans
}
// @lc code=end

console.log(
  spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]),
)
