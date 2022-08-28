//https://school.programmers.co.kr/learn/courses/30/lessons/12939

function solution(s) {
  let arr = s
    .split(' ')
    .map((it) => parseInt(it))
    .sort((a, b) => a - b);
  return arr[0].toString() + ' ' + arr[arr.length - 1].toString();
}
