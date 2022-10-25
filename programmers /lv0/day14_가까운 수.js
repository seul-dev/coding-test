function solution(array, n) {
  const minGap = Math.min(...array.map((v) => Math.abs(n - v)));
  return array.sort((a, b) => a - b).find((v) => Math.abs(n - v) === minGap);
}
