function solution(numbers, direction) {
  const length = numbers.length;
  if (direction === 'right') {
    return numbers.slice(-1).concat(numbers.slice(0, length - 1));
  } else {
    return numbers.slice(1).concat(numbers[0]);
  }
}
