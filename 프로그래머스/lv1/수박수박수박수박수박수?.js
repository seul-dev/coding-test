//https://programmers.co.kr/learn/courses/30/lessons/12922
function solution(n) {
  let result = '';
  for (let i = 1; i <= n; i++) {
    result += i % 2 === 1 ? '수' : '박';
  }
  return result;

  //다른 풀이
  // return '수박'.repeat(n/2 + 1).slice(0,n)
}
