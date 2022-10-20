function solution(numbers) {
  const duplicate = numbers.slice().sort((a, b) => b - a);
  return duplicate[0] * duplicate[1];
}
