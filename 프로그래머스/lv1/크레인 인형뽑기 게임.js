//https://school.programmers.co.kr/learn/courses/30/lessons/64061

function solution(board, moves) {
  let count = 0;
  const stack = [];
  for (let i = 0; i < moves.length; i++) {
    const col = moves[i] - 1;
    for (let row = 0; row < board.length; row++) {
      if (board[row][col] != 0) {
        if (stack[stack.length - 1] === board[row][col]) {
          stack.pop();
          count += 2;
        } else {
          stack.push(board[row][col]);
        }
        board[row][col] = 0;
        break;
      }
    }
  }
  return count;
}
