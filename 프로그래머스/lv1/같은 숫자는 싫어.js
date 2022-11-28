//https://programmers.co.kr/learn/courses/30/lessons/12906

function solution(arr) {
  // let result = [];
  // for (let i = 0 ; i< arr.length ; i++) {
  //     if(arr[i] !== arr[i+1]) {
  //         result.push(arr[i])
  //     }
  // }
  // return result

  //filter()를 이용한 풀이
  return arr.filter((val, index) => val !== arr[index + 1]);
}
