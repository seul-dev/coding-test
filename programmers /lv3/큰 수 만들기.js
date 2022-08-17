//https://school.programmers.co.kr/learn/courses/30/lessons/42883
function solution(number, k) {
  const stack = [];

  for (let i = 0; i < number.length; i++) {
    const now = number[i];

    while (k > 0 && stack[stack.length - 1] < now) {
      stack.pop();
      k--;
    }
    stack.push(now);
  }
  return stack.join('').slice(0, number.length - k);
}
