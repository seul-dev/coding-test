function solution(money) {
  const answer = [];
  const coffee = 5500;

  answer[0] = Math.floor(money / coffee);
  answer[1] = money % coffee;

  return answer;
}
