//https://school.programmers.co.kr/learn/courses/30/lessons/12924

function solution(n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (checkSum(i, 0, n)) {
      count += 1;
    }
  }
  return count;
}

function checkSum(cur, sum, n) {
  if (sum === n) return true;
  if (sum > n) return false;
  return checkSum(cur + 1, sum + cur, n);
}
