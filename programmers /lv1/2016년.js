//https://programmers.co.kr/learn/courses/30/lessons/12901
function solution(a, b) {
  let date = new Date(2016, a - 1, b);
  const dayStr = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  return dayStr[date.getDay()];
}
