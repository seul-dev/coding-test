function solution(array) {
  const duplicateArr = array.slice(0).sort((a, b) => a - b);
  const middleIdx = parseInt(array.length / 2);
  return duplicateArr[middleIdx];
}
