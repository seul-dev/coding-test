function solution(s1, s2) {
  const intersection = s1.filter((v) => s2.includes(v));
  return intersection.length;
}
