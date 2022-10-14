function solution(numbers) {
  var answer = numbers.reduce((acc, cur) => acc + cur, 0);
  return answer / numbers.length;
}
