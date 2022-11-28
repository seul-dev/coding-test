// https://school.programmers.co.kr/learn/courses/30/lessons/12951?language=javascript

function solution(s) {
  return s.toLowerCase().replace(/\b[a-z]/g, (char) => char.toUpperCase());
}
