function solution(numbers) {
  const arr = numbers.slice().sort((a, b) => Math.abs(b) - Math.abs(a));

  let answer = [];

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      answer.push(arr[i] * arr[j]);
    }
  }
  return Math.max(...answer);
}
