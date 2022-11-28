function solution(n, k) {
  const freeDrink = parseInt(n / 10);
  return 12000 * n + 2000 * k - 2000 * freeDrink;
}
