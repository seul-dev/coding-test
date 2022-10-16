function solution(age) {
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

  return ('' + age).split('').reduce((acc, cur) => acc + alphabet[+cur], '');
}
