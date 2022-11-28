//https://school.programmers.co.kr/learn/courses/30/lessons/42885
function solution(people, limit) {
  let boat = 0;

  people.sort((a, b) => a - b);

  let light = 0;
  let heavy = people.length - 1;

  while (light <= heavy) {
    if (people[light] + people[heavy] <= limit) {
      light++;
      heavy--;
      boat++;
    } else {
      heavy--;
      boat++;
    }
  }
  return boat;
}
