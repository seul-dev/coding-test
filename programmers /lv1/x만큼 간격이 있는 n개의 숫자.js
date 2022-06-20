//연습문제
//https://programmers.co.kr/learn/courses/30/lessons/12954

function solution(x, n) {
  const answer = [];
  for (let i = 1; i <= n; i++) {
    answer.push(x * i);
  }
  return answer;

  /* 다른 풀이
  return Array(n)
    .fill(x)
    .map((value, index) => value * (index + 1));
  */
}
