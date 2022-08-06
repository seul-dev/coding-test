//https://school.programmers.co.kr/learn/courses/30/lessons/42587

function solution(priorities, location) {
  const arr = priorities.map((el, idx) => {
    return { idx, el };
  });

  let queue = [];

  while (arr.length > 0) {
    let head = arr.shift();
    let hasHighPriority = arr.some((it) => it.el > head.el);
    if (hasHighPriority) {
      arr.push(head);
    } else {
      queue.push(head);
    }
  }

  return queue.findIndex((it) => it.idx === location) + 1;
}
