//https://programmers.co.kr/learn/courses/30/lessons/86491

function solution(sizes) {
  const rotated = sizes.map((el) => el.sort((a, b) => a - b));
  const w = Math.max(...rotated.map((el) => el[0]));
  const h = Math.max(...rotated.map((el) => el[1]));

  return w * h;
}
