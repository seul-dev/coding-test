//https://school.programmers.co.kr/learn/courses/30/lessons/42889
function solution(N, stages) {
  var answer = [];
  for (let stage = 1; stage <= N; stage++) {
    const arrivedPlayers = stages.filter((el) => el >= stage).length;
    const unclearedPlayers = stages.filter((el) => el === stage).length;
    const failRatio = unclearedPlayers / arrivedPlayers;
    answer.push({ stage, failRatio });
  }
  answer.sort((a, b) => b.failRatio - a.failRatio);
  return answer.map((el) => el.stage);
}
