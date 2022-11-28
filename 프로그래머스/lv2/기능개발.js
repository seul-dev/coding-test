//https://school.programmers.co.kr/learn/courses/30/lessons/42586
function solution(progresses, speeds) {
  const answer = [];
  const deploy = progresses.map((el, i) => Math.ceil((100 - el) / speeds[i]));
  let count = 1;
  let maxDay = deploy[0];

  for (let i = 1; i < deploy.length; i++) {
    if (deploy[i] <= maxDay) {
      count++;
    } else {
      maxDay = deploy[i];
      answer.push(count);
      count = 1;
    }
  }
  answer.push(count);
  return answer;
}
