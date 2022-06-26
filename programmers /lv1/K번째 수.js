//정렬
//https://programmers.co.kr/learn/courses/30/lessons/42748

function solution(array, commands) {
  let answer = [];

  for (let el of commands) {
    let [from, to, k] = el;
    let sliced = array.slice(from - 1, to);
    sliced.sort((a, b) => a - b);
    answer.push(sliced[k - 1]);
  }

  return answer;
  //다른 풀이
  //   commands.map((el) => {
  //     const [from, to, k] = el;
  //     return array.slice(from - 1, to).sort((a, b) => a - b)[k - 1];
  //   });
}
