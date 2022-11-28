function solution(order) {
  const clap = String(order)
    .split('')
    .filter((v) => ['3', '6', '9'].includes(v));
  return clap.length;
}
