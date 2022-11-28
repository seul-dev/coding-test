function solution(balls, share) {
  const memo = [BigInt(1), BigInt(1)];

  for (let i = 2; i <= balls; i++) {
    memo[i] = BigInt(i) * memo[i - 1];
  }
  return memo[balls] / (memo[balls - share] * memo[share]);
}
