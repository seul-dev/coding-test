// https://school.programmers.co.kr/learn/courses/30/lessons/42746?language=javascript
function solution(numbers) {
  let answer = '';
  const strings = numbers.map((it) => String(it));

  answer = strings
    .sort((a, b) => {
      return b + a - (a + b);
    })
    .join('');

  return answer[0] === '0' ? '0' : answer;
}
