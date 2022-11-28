function solution(my_string) {
  return (numbers = my_string
    .split('')
    .filter((v) => !isNaN(+v))
    .map((v) => +v)
    .sort((a, b) => a - b));
}
