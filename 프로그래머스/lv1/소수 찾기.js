//연습문제
//https://programmers.co.kr/learn/courses/30/lessons/12921

function solution(n) {
  let count = 0;
  for (let candi = 2; candi <= n; candi++) {
    let isPrime = true;
    for (let divider = 2; divider <= Math.sqrt(candi); divider++) {
      if (candi % divider === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      count++;
    }
  }
  return count;
}
