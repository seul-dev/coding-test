//연습문제
//https://programmers.co.kr/learn/courses/30/lessons/12947

function solution(x) {
  //     let digitArray = (x + '').split('').map((item) => parseInt(item))
  //     let digitSum = digitArray.reduce((acc, cur) => acc + cur, 0)

  let digitSum = (x + '').split('').reduce((acc, cur) => +acc + +cur, 0);

  if (x % digitSum === 0) {
    return true;
  } else {
    return false;
  }
}
