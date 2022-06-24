//연습문제
//https://programmers.co.kr/learn/courses/30/lessons/12912
function solution(a, b) {
  let result = 0;
  if (a > b) {
    [a, b] = [b, a];
  }

  for (let i = a; i <= b; i++) {
    result += i;
  }
  return result;
}
