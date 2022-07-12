//https://school.programmers.co.kr/learn/courses/30/lessons/72410
function solution(new_id) {
  let answer = new_id
    .toLowerCase()
    .replace(/[^a-z0-9-_.]/g, '')
    .replace(/\.+/g, '.')
    .replace(/^\.|\.$/g, '')
    .replace(/^$/, 'a')
    .slice(0, 15)
    .replace(/\.$/, '');

  return answer.length > 2
    ? answer
    : answer + answer[answer.length - 1].repeat(3 - answer.length);
}
