//연습문제
//https://programmers.co.kr/learn/courses/30/lessons/12928

function solution(n) {
  let divisor = 1;
  let divisorSum = 0;
  while (divisor <= n) {
    if (n % divisor === 0) {
      divisorSum += divisor;
    }
    divisor++;
  }
  return divisorSum;
}
