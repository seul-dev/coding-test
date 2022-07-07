//https://school.programmers.co.kr/learn/courses/30/lessons/86051

function solution(numbers) {
  let fullArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let fullSum = fullArr.reduce((acc, cur) => acc + cur, 0); // 45
  let numbersSum = numbers.reduce((acc, cur) => acc + cur, 0);

  return fullSum - numbersSum;
}
