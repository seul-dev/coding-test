//연습문제
//https://programmers.co.kr/learn/courses/30/lessons/12948

function solution(phone_number) {
  let firstNum = '';
  for (let i = 0; i < phone_number.length - 4; i++) {
    firstNum += '*';
  }
  let result = firstNum + phone_number.slice(-4);
  return result;

  /* 다른 풀이 
    let firstNum = "*".repeat(phone_number.length-4);
    let result = firstNum + phone_number.slice(-4);
    return result;
    */
}
