function solution(array) {
  const frequencyTable = {};

  for (let val of array) {
    frequencyTable[val] = (frequencyTable[val] || 0) + 1;
  }

  const keys = Object.keys(frequencyTable);
  keys.sort((a, b) => frequencyTable[b] - frequencyTable[a]);

  const max = keys[0];

  return frequencyTable[keys[0]] === frequencyTable[keys[1]] ? -1 : +max;
}
