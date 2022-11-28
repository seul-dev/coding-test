//연습문제
//https://programmers.co.kr/learn/courses/30/lessons/12944

function solution(arr) {
  let sum = arr.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
  return sum / arr.length;
}
