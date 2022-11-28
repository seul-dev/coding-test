function solution(s) {
  const stack = [];
  s.split(' ').forEach((el) => {
    if (el === 'Z') {
      stack.pop(el);
    } else {
      stack.push(el);
    }
  });
  return stack.reduce((acc, cur) => acc + Number(cur), 0);
}
