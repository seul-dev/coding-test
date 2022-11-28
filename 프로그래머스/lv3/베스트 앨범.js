//https://school.programmers.co.kr/learn/courses/13213/lessons/91081
function solution(genres, plays) {
  let genresSum = {};
  let hashTable = [];

  for (let i = 0; i < genres.length; i++) {
    let genreName = genres[i];
    let play = plays[i];
    hashTable.push({ idx: i, genre: genreName, play: play });
    genresSum[genreName] = (genresSum[genreName] || 0) + plays[i];
  }

  hashTable.sort((a, b) => {
    if (a.genre !== b.genre) return genresSum[b.genre] - genresSum[a.genre];
    if (a.play !== b.play) return b.play - a.play;
    return a.idx - b.idx;
  });
  let hashCount = {};
  hashCount = hashTable
    .filter((it) => {
      if (hashCount[it.genre] >= 2) return false;
      hashCount[it.genre] = (hashCount[it.genre] || 0) + 1;
      return true;
    })
    .map((it) => it.idx);

  return hashCount;
}
