// https://school.programmers.co.kr/learn/courses/30/lessons/42862

function solution(n, lost, reserve) {
  const clothes = Array(n).fill(1);
  lost.map((el) => {
    clothes[el - 1] = 0;
  });

  reserve.map((el) => {
    clothes[el - 1] += 1;
  });

  for (let i = 0; i < n; i++) {
    if (clothes[i] === 0 && clothes[i - 1] === 2) {
      clothes[i] = 1;
      clothes[i - 1] = 1;
    } else if (clothes[i] === 0 && clothes[i + 1] === 2) {
      clothes[i] = 1;
      clothes[i + 1] = 1;
    }
  }

  return clothes.filter((el) => el > 0).length;
}
