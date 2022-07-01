//https://programmers.co.kr/learn/courses/30/lessons/12940
function getGcd(a, b) {
  if (b === 0) return a;
  return getGcd(b, a % b);
}

function solution(n, m) {
  let gcd = getGcd(m, n);
  return [gcd, (n * m) / gcd];
}
