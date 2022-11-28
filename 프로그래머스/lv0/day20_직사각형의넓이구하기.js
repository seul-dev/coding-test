function solution(dots) {
  const xDots = dots.map(([x, y]) => x);
  const yDots = dots.map(([x, y]) => y);

  const X = Math.max(...xDots) - Math.min(...xDots);
  const Y = Math.max(...yDots) - Math.min(...yDots);
  return X * Y;
}
