//https://school.programmers.co.kr/learn/courses/30/lessons/12945#qna
function solution(n) {
  const memo = [0, 1];
  for (let i = 2; i <= n; i++) {
    const sum = (memo[i - 1] + memo[i - 2]) % 1234567;
    memo.push(sum);
  }
  return memo[n];
}
