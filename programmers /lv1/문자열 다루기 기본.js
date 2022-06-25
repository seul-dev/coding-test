//https://programmers.co.kr/learn/courses/30/lessons/12918
function solution(s) {
  if (s.length !== 4 && s.length !== 6) return false;
  for (let i = 0; i < s.length; i++) {
    let number = Number(s[i]);
    if (isNaN(number)) {
      return false;
    }
  }
  return true;
}
