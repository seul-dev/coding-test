// https://school.programmers.co.kr/learn/courses/30/lessons/67256
function solution(numbers, hand) {
  const keypad = {
    1: [1, 1],
    2: [1, 2],
    3: [1, 3],
    4: [2, 1],
    5: [2, 2],
    6: [2, 3],
    7: [3, 1],
    8: [3, 2],
    9: [3, 3],
    '*': [4, 1],
    0: [4, 2],
    '#': [4, 3],
  };
  let result = '';
  let left = keypad['*'];
  let right = keypad['#'];

  const getDistance = (arr1, arr2) => {
    return Math.abs(arr1[0] - arr2[0]) + Math.abs(arr1[1] - arr2[1]);
  };

  numbers.forEach((num) => {
    let current = keypad[num];

    if (current[1] === 1) {
      result += 'L';
      left = current;
    } else if (current[1] === 3) {
      result += 'R';
      right = current;
    } else {
      let leftDistance = getDistance(left, current);
      let rightDistance = getDistance(right, current);
      if (leftDistance === rightDistance) {
        if (hand === 'left') {
          result += 'L';
          left = current;
        } else {
          result += 'R';
          right = current;
        }
      } else if (leftDistance < rightDistance) {
        result += 'L';
        left = current;
      } else {
        result += 'R';
        right = current;
      }
    }
  });
  return result;
}
