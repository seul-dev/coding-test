function solution(denum1, num1, denum2, num2) {
  const top = denum1 * num2 + denum2 * num1;
  const bottom = num1 * num2;

  let lcm = 1;
  for (let i = 1; i <= bottom; i++) {
    if (top % i === 0 && bottom % i === 0) {
      lcm = i;
    }
  }

  var answer = [top / lcm, bottom / lcm];
  return answer;
}
