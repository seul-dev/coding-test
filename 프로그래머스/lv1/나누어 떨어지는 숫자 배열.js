//연습문제
//https://programmers.co.kr/learn/courses/30/lessons/12910

function solution(arr, divisor) {
  let result = arr.filter((el) => el % divisor === 0);
  return result.length === 0 ? [-1] : result.sort((a, b) => a - b);
}
