// https://school.programmers.co.kr/learn/courses/30/lessons/1845
function solution(nums) {
  const max = nums.length / 2;

  const hashSet = [...new Set(nums)];
  const limit = hashSet.length;

  return max > limit ? limit : max;
}
