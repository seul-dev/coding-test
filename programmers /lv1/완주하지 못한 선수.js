//해시
//https://programmers.co.kr/learn/courses/30/lessons/42576
function solution(participant, completion) {
  let hashTable = {};
  for (let p of participant) {
    !hashTable[p] ? (hashTable[p] = 1) : (hashTable[p] = hashTable[p] + 1);
  }
  for (let c of completion) {
    hashTable[c] ? (hashTable[c] -= 1) : hashTable[c];
  }
  for (let p of participant) {
    if (hashTable[p] >= 1) {
      return p;
    }
  }
}
