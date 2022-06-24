//연습문제
//https://programmers.co.kr/learn/courses/30/lessons/12933

function solution(n) {
  let arr = (n + '').split('').map((el) => +el);
  arr.sort((a, b) => b - a);
  return Number(arr.join(''));
}
