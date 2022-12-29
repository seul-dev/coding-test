function solution(board) {
//     const range = board.length;  
//     const nearby = [
//         [0, -1],
//         [0, 1],
//         [-1, -1],
//         [-1, 0],
//         [-1, 1],
//         [1, -1],
//         [1, 0],
//         [1, 1]
//     ]
    
//     const bomb =[]
//     for(let row = 0; row < range ; row++) {
//         for(let col =0 ; col < range ; col++) {
//             if(board[row][col] === 1 ) {
//                 bomb.push([row, col])
//             }
//         }
//     }
    
//     for(let [bx,by] of bomb) {
//         for(let [x,y] of nearby) {
//             const [dX, dY] = [bx + x, by+ y]
//             if(dX >= 0 && dX < range && dY >=0 && dY <range) {
//                 board[dX][dY] = 1
//             }
            
//         }
//     }
    
//     let safeZoneCount = 0;
//     for(let row = 0; row < board.length ; row++) {
//         for(let col =0 ; col < board[1].length ; col++) {
//             if(board[row][col] === 0) {
//                 safeZoneCount += 1
//             }
//         }
//     }    
//     return safeZoneCount
    
    const N = board.length
  const dx = [-1, 1, 0, 0, -1, -1, 1, 1]
  const dy = [0, 0, -1, 1, -1, 1, -1, 1]

  // 지뢰가 설치된 곳
  const booms = []
  for (let x = 0; x < N; x++) {
    for (let y = 0; y < N; y++) {
      if (board[x][y] === 1) {
        booms.push([x, y])
      }
    }
  }

  // 지뢰가 설치된 곳 주변에 폭탄 설치
  booms.forEach(([x, y]) => {
    for (let i = 0; i < 8; i++) {
      const nx = x + dx[i]
      const ny = y + dy[i]
      if (0 <= nx && nx < N && 0 <= ny && ny < N) {
        board[nx][ny] = 1
      }
    }
  })

  // 폭탄이 설치되지 않은 곳만 카운팅
  let count = 0
  for (let x = 0; x < N; x++) {
    for (let y = 0; y < N; y++) {
      if (board[x][y] === 0) {
        count++
      }
    }
  }

  return count
    
}


