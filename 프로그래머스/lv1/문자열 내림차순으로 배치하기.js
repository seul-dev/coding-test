//연습문제
//https://programmers.co.kr/learn/courses/30/lessons/12917

function solution(s) {
  return s.split('').sort().reverse().join('');

  // 다른풀이
  // return s.split('').sort((a, b) => {
  //     if (a > b) return -1;
  //     if (b > a) return 1;
  //     return 0;
  // }).join('');
}
