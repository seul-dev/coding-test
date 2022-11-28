//https://school.programmers.co.kr/learn/courses/30/lessons/17681
function solution(n, arr1, arr2) {
  let addArr = arr1.map((el, i) => (el | arr2[i]).toString(2).padStart(n, 0));

  for (let i = 0; i < addArr.length; i++) {
    let el = addArr[i];
    el = el.replace(/1/gi, '#');
    el = el.replace(/0/gi, ' ');
    addArr[i] = el;
  }
  return addArr;
}
