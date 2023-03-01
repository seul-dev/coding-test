function solution(keymap, targets) {
  const map = new Map();

  keymap.forEach((key) =>
    [...key].forEach((key, i) => {
      if (!map.has(key) || map.get(key) > i + 1) {
        map.set(key, i + 1);
      }
    })
  );

  return targets.map(
    (target) =>
      [...target].reduce((count, key) => count + map.get(key), 0) || -1
  );
}
