function solution(w) {
  if (w === "") return "";

  let cnt = 0;
  let balancedIndex = -1;

  for (let i = 0; i < w.length; i++) {
    w[i] === "(" ? cnt++ : cnt--;

    if (cnt === 0) {
      balancedIndex = i;
      break;
    }
  }

  const u = w.slice(0, balancedIndex + 1);
  const v = w.slice(balancedIndex + 1);

  cnt = 0;
  for (let i = 0; i < u.length; i++) {
    u[i] === "(" ? cnt++ : cnt--;

    if (cnt < 0) {
      return `(${solution(v)})${u
        .slice(1, u.length - 1)
        .replace(/\(|\)/g, char => (char === "(" ? ")" : "("))}`;
    }
  }

  return u + solution(v);
}