function solution(s) {
  const table = {};
  for (let char of s) {
    table[char] = (table[char] || 0) + 1;
  }

  const arr = Object.keys(table).filter((v) => table[v] === 1);
  return arr.sort().join('');
}
