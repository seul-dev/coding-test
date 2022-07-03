//https://programmers.co.kr/learn/courses/30/lessons/81301
function solution(s) {
  let result = s;
  const words = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];

  for (let i = 0; i < words.length; i++) {
    let regexAll = new RegExp(words[i], 'g');
    result = result.replace(regexAll, i);
  }

  // 다른 풀이
  // for(let i = 0; i<words.length; i++) {
  //     result = result.split(words[i]).join(i)
  // }
  return Number(result);
}
