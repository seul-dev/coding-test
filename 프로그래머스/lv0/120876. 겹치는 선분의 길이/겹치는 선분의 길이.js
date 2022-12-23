function solution(lines) {
  const visited = lines.reduce((a, [x, y]) => {
    const min = Math.min(x, y)
    const max = Math.max(x, y)
    
    for (let i = min; i < max; i++) {
        a[i] = a[i] ? a[i] + 1 : 1;
    }
    return a;
  }, {});

  return Object.values(visited).filter(v => v > 1).length;
}