//https://school.programmers.co.kr/learn/courses/30/lessons/17682

function solution(dartResult) {
  let score = [];
  let temp = 0;

  for (let i = 0; i < dartResult.length; i++) {
    if (dartResult[i].match(/[0-9]/)) {
      if (dartResult[i] == 1 && dartResult[i + 1] == 0) {
        temp = 10;
        i++;
      } else {
        temp = dartResult[i];
      }
    } else if (dartResult[i] === 'S') {
      score.push(temp);
    } else if (dartResult[i] === 'D') {
      score.push(Math.pow(temp, 2));
    } else if (dartResult[i] === 'T') {
      score.push(Math.pow(temp, 3));
    } else if (dartResult[i] === '*') {
      score[score.length - 1] *= 2;
      score[score.length - 2] *= 2;
    } else if (dartResult[i] === '#') {
      score[score.length - 1] *= -1;
    }
  }

  return score.reduce((acc, cur) => acc + Number(cur), 0);
}
