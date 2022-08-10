//https://school.programmers.co.kr/learn/courses/30/lessons/77884
function solution(left, right) {
  let result = 0;
  while (left <= right) {
    let sqrt = Math.sqrt(left);
    if (Number.isInteger(sqrt)) {
      result -= left;
    } else {
      result += left;
    }
    left++;
  }
  return result;
}
