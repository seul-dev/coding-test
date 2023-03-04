function solution(number, limit, power) {
  return Array.from({ length: number }, (_, i) => countDivisors(i + 1)).map((knight) => knight > limit ? power : knight).reduce((sum, cur) => sum + cur, 0)
}

function countDivisors(num) {
  const sqrt = Math.floor(Math.sqrt(num))
  let count = 0;
  for (let i = 1; i<= sqrt ; i++) {
    if (num % i === 0) {
      const otherDivisor = num / i; 
      count += (i === otherDivisor) ? 1 : 2; 
    }
  }
  return count;
}