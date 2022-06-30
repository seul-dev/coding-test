//https://programmers.co.kr/learn/courses/30/lessons/76501#

function solution(absolutes, signs) {
  return absolutes.reduce((acc, cur, i) => acc + cur * (signs[i] ? 1 : -1), 0);
}
