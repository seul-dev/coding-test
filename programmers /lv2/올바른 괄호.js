//https://school.programmers.co.kr/learn/courses/30/lessons/12909
function solution(s) {
  let count = 0;
  for (const c of s) {
    if (c === '(') {
      count += 1;
    } else {
      // ')' 일때,
      if (count === 0) {
        // 예외처리
        return false;
      }
      count -= 1; // 기본동작
    }
  }

  return count === 0;
}
