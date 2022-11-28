//연습문제
//https://programmers.co.kr/learn/courses/30/lessons/12916

function solution(s) {
  // 다른풀이
  // const arr  = s.toLowerCase().split('')
  // const pArr = arr.filter((item) => item === 'p')
  // const yArr = arr.filter((item) => item === 'y')
  // return pArr.length === yArr.length

  let lower = s.toLowerCase();
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (lower[i] === 'p') count++;
    if (lower[i] === 'y') count--;
  }
  return count === 0;
}
