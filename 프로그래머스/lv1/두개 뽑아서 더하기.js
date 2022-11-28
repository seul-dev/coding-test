//두 개 뽑아서 더하기
//https://programmers.co.kr/learn/courses/30/lessons/68644

function solution(numbers) {
  const sumArr = [];
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      let sum = numbers[i] + numbers[j];
      sumArr.push(sum);
    }
  }
  const result = [...new Set(sumArr)];

  return result.sort((a, b) => a - b);
}
