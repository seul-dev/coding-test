//연습문제
//https://programmers.co.kr/learn/courses/30/lessons/12930

function solution(s) {
  const words = s.split(' ');
  let result = [];
  let tempString = '';

  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      tempString +=
        j % 2 === 0 ? words[i][j].toUpperCase() : words[i][j].toLowerCase();
    }
    result.push(tempString);
    tempString = '';
  }
  return result.join(' ');

  //다른풀이
  // return s.split(' ').map((words)=> words.split('').map((word, index)=> index % 2 === 0? word.toUpperCase(): word.toLowerCase()).join('')).join(' ')
}
