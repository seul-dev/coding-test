function solution(arr) {
  let smallest = arr.reduce((min, val) => (min < val ? min : val));
  let newArr = arr.filter((el) => el !== smallest);
  if (newArr.length === 0) {
    return [-1];
  }
  return newArr;
}
