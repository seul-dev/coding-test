function solution(spell, dic) {
  const filterdArr = dic.filter((word) =>
    spell.every((char) => word.includes(char))
  );
  return filterdArr.length ? 1 : 2;
}
