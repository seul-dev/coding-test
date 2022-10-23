function solution(n) {
  let result = 0;
  for (let i = 0; i <= 10; i++) {
    if (n >= factorial(i)) {
      result = i;
      continue;
    } else {
      break;
    }
  }
  return result;
}

function factorial(num) {
  if (num <= 1) {
    return 1;
  }
  return num * factorial(num - 1);
}
