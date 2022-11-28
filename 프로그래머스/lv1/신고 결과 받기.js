//https://school.programmers.co.kr/learn/courses/30/lessons/92334
function solution(id_list, report, k) {
  let answer = Array(id_list.length).fill(0); // 메일 받은 횟수 기본값을 0으로 채워줌
  let reportList = {};

  const reportSet = [...new Set(report)]; // 중복 신고 제거

  reportSet.map((el) => {
    reportList[el.split(' ')[1]] = [];
  });

  for (let el of reportSet) {
    // {신고당한 유저 : [신고한 유저]}
    const [userId, reportId] = el.split(' ');
    reportList[reportId].push(userId);
  }

  for (let key in reportList) {
    if (reportList[key].length >= k) {
      reportList[key].forEach((user) => answer[id_list.indexOf(user)]++);
    }
  }
  return answer;
}
