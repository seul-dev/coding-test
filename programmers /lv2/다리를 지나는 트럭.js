//https://school.programmers.co.kr/learn/courses/30/lessons/42583
function solution(bridge_length, weight, truck_weights) {
  let time = 0;

  let bridge = Array(bridge_length).fill(0);
  let totalWeight = 0;
  // 처음 1초
  let current = truck_weights.shift();
  bridge.unshift(current);
  bridge.pop();
  totalWeight += current;
  time++;

  while (totalWeight) {
    totalWeight -= bridge.pop();

    current = truck_weights.shift();
    if (current === undefined) {
      current = 0;
    }

    if (totalWeight + current <= weight) {
      bridge.unshift(current);
      totalWeight += current;
    } else {
      truck_weights.unshift(current);
      bridge.unshift(0);
    }
    time++;
  }
  return time;
}
