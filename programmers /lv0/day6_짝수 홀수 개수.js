function solution(num_list) {
  const evenNumCount = num_list.filter((el) => el % 2 === 0).length;
  return [evenNumCount, num_list.length - evenNumCount];
}
