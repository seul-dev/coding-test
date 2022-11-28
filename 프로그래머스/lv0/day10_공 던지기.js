function solution(numbers, k) {
  let player = 1;
  for (let i = 1; i < k; i++) {
    player = player + 2;
    if (player > numbers.length) {
      player %= numbers.length;
    }
  }
  return player;
}
