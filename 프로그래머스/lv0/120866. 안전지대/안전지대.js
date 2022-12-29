function solution(board) {
      const nearby = [
          [-1, -1],
          [-1, 0],
          [-1, 1],
          [0, -1],
          [0, 1],
          [1, -1],
          [1, 0],
          [1, 1],
        ];

      const bombs = []
      for (let x = 0; x < board.length; x++) {
        for (let y = 0; y < board.length; y++) {
          if (board[x][y] === 1) {
            bombs.push([x, y])
          }
        }
      }

      bombs.forEach(([x, y]) => {
        for (let [nX,nY] of nearby) {
          const dX = x + nX
          const dY = y + nY
          if (0 <= dX && dX < board.length && 0 <= dY && dY < board.length) {
            board[dX][dY] = 1
          }
        }
      })

      let count = 0
      for (let x = 0; x < board.length; x++) {
        for (let y = 0; y < board.length; y++) {
          if (board[x][y] === 0) {
            count++
          }
        }
      }

      return count

}


