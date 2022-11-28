//https://school.programmers.co.kr/learn/courses/30/lessons/42840
function solution(answers) {
  const p1 = [1, 2, 3, 4, 5];
  const p2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const p3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  const count = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    if (p1[i % 5] === answers[i]) count[0]++;
    if (p2[i % 8] === answers[i]) count[1]++;
    if (p3[i % 10] === answers[i]) count[2]++;
  }

  const answer = [];
  const maxValue = Math.max(...count);
  let index = 0;
  for (let i = 0; i < 3; i++) {
    if (count[i] === maxValue) {
      answer.push(i + 1);
    }
  }
  return answer;
}
