function solution(keyinput, board) {
  const [xlimit, ylimit] = board.map((el) => parseInt(el / 2));

  const move = {
    up: [0, 1],
    down: [0, -1],
    left: [-1, 0],
    right: [1, 0],
  };

  const answer = keyinput
    .map((el) => move[el])
    .reduce(
      ([x, y], [moveX, moveY]) =>
        Math.abs(x + moveX) > xlimit || Math.abs(y + moveY) > ylimit
          ? [x, y]
          : [x + moveX, y + moveY],
      [0, 0]
    );

  return answer;
}
