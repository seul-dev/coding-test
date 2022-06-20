//연습문제
//https://programmers.co.kr/learn/courses/30/lessons/12950

function solution(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    let sum = [];
    for (let j = 0; j < arr1[i].length; j++) {
      sum.push(arr1[i][j] + arr2[i][j]);
    }
    result.push(sum);
  }
  return result;
  /** 다른 풀이
   let answer = arr1.map((row, i) => { 
        return row.map((el, j) => {
            return el + arr2[i][j]
        })
    })
    return answer
   */
}
