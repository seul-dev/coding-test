//연습문제
//https://programmers.co.kr/learn/courses/30/lessons/12931

function solution(n) {
  let result = (n + '').split('').reduce((acc, cur) => acc + Number(cur), 0);
  return result;
}
