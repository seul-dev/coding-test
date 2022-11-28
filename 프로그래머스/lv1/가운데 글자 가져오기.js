//https://programmers.co.kr/learn/courses/30/lessons/12903
function solution(s) {
  let mid = Math.floor(s.length / 2); // 반올림
  return s.length % 2 === 0 ? s[mid - 1] + s[mid] : s[mid];
}
