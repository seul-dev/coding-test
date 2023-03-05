function solution(babbling) {
  const checkRepeated = /(aya|ye|woo|ma)\1/;
  const checkPossible = /^(aya|ye|woo|ma)+$/;

  return babbling.reduce(
    (answer, word) =>
      !checkRepeated.test(word) && checkPossible.test(word) ? ++answer : answer,
    0,
  );
}
