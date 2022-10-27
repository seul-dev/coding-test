function solution(quiz) {
  const splitArr = quiz.map((v) => v.split(' = '));
  return splitArr.map((v) => (eval(v[0]) === Number(v[1]) ? 'O' : 'X'));
}
