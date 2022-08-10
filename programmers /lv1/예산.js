//https://school.programmers.co.kr/learn/courses/30/lessons/12982
function solution(d, budget) {
  d.sort((a, b) => a - b);
  let i = 0;
  while (budget >= 0) {
    budget -= d[i];
    i++;
  }
  return i - 1;
}
