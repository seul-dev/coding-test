function solution(hp) {
  const antHp = [5, 3, 1];
  let count = 0;
  for (let ant of antHp) {
    if (hp < ant) continue;
    count += Math.floor(hp / ant);
    hp = hp % ant;
  }
  return count;
}
