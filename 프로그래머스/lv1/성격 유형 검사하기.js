//https://school.programmers.co.kr/learn/courses/30/lessons/118666
function solution(survey, choices) {
  var answer = '';
  const dict = {
    R: 0,
    T: 0,
    C: 0,
    F: 0,
    J: 0,
    M: 0,
    A: 0,
    N: 0,
  };
  for (let i = 0; i < choices.length; i++) {
    const [first, second] = survey[i];

    if (choices[i] < 4) {
      dict[first] = (dict[first] || 0) + 4 - choices[i];
    } else if (choices[i] > 4) {
      dict[second] = (dict[second] || 0) + choices[i] - 4;
    }
  }

  const type = ['RT', 'CF', 'JM', 'AN'];
  for (let el of type) {
    const [first, second] = el;
    if (dict[first] < dict[second]) {
      answer += second;
    } else {
      answer += first;
    }
  }

  return answer;
}
