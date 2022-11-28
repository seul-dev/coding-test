function solution(rsp) {
  const winning = {
    0: 5,
    2: 0,
    5: 2,
  };

  return rsp.split('').reduce((acc, cur) => acc + winning[cur], '');
}
