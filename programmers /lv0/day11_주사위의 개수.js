function solution(box, n) {
  return box.map((v) => parseInt(v / n)).reduce((acc, cur) => acc * cur, 1);
}
