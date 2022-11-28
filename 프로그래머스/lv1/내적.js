//월간 코드 챌린지 시즌1
//https://programmers.co.kr/learn/courses/30/lessons/70128

function solution(a, b) {
  // let result = 0
  // for(let i = 0 ; i < a.length; i++) {
  //     result += a[i] * b[i]
  // }
  // return result

  return a.reduce((acc, cur, i) => acc + cur * b[i], 0);
}
