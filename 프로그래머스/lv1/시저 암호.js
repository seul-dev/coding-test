//연습문제
//https://programmers.co.kr/learn/courses/30/lessons/12926?language=javascript

function solution(s, n) {
  let result = '';
  let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let lower = 'abcdefghijklmnopqrstuvwxyz';

  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') {
      result += s[i];
    } else {
      let letterCase = upper.includes(s[i]) ? upper : lower;
      let curIdx = letterCase.indexOf(s[i]);
      let tobeIdx = curIdx + n;
      tobeIdx >= letterCase.length ? (tobeIdx -= letterCase.length) : tobeIdx;
      result += letterCase[tobeIdx];
    }
  }
  return result;
}
