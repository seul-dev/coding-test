//연습문제
//https://programmers.co.kr/learn/courses/30/lessons/12934

function solution(n) {
  let squareRoot = Math.sqrt(n);

  return Number.isInteger(squareRoot) ? (squareRoot + 1) ** 2 : -1;
}
