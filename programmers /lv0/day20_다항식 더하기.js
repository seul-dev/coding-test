function solution(polynomial) {
  const arr = polynomial.split(' + ');

  const char = arr
    .filter((el) => el.includes('x'))
    .map((el) => el.replace('x', '') || '1')
    .reduce((acc, cur) => acc + parseInt(cur), 0);

  const num = arr
    .filter((el) => !el.includes('x'))
    .reduce((acc, cur) => acc + parseInt(cur), 0);

  const answer = [];
  if (char) {
    answer.push(char === 1 ? 'x' : `${char}x`);
  }
  if (num) {
    answer.push(num);
  }
  return answer.join(' + ');
}
