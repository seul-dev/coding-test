//https://school.programmers.co.kr/learn/courses/30/lessons/77484
function solution(lottos, win_nums) {
  let rank = [6, 6, 5, 4, 3, 2, 1];
  let least = 0;
  let countZero = 0;

  for (let num of lottos) {
    if (win_nums.includes(num)) {
      least += 1;
    }
    if (num === 0) {
      countZero += 1;
    }
  }
  let best = least + countZero;

  return [rank[best], rank[least]];
}
