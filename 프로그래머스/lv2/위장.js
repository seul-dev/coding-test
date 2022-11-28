//https://school.programmers.co.kr/learn/courses/30/lessons/42578?language=javascript
function solution(clothes) {
  let answer = 1;
  const closet = {};
  clothes.forEach((it) => (closet[it[1]] = (closet[it[1]] || 0) + 1));

  for (let key in closet) {
    answer *= closet[key] + 1;
  }
  return answer - 1;
}
