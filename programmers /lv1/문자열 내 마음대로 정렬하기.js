//https://programmers.co.kr/learn/courses/30/lessons/12915
function solution(strings, n) {
  return strings.sort((a, b) => {
    if (a[n] > b[n]) {
      return 1;
    } else if (a[n] < b[n]) {
      return -1;
    } else {
      if (a > b) return 1;
      else if (a < b) return -1;
    }
  });
}
