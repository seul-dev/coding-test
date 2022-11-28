//연습문제
//https://programmers.co.kr/learn/courses/30/lessons/12943

function solution(num) {
  let count = 0;

  while (num !== 1) {
    if (num % 2 === 0) {
      num = num / 2;
    } else if (num % 2 === 1) {
      num = num * 3 + 1;
    }
    count++;
    if (count === 500) {
      return -1;
      break;
    }
  }
  return count;

  /* 다른풀이
    let count = 0; 
    while (num !== 1 && count !== 500) {
        num % 2 === 0? num = num / 2 : num = num *3 +1;
        count++;
    }
    return num === 1? count : -1;
    */
}
