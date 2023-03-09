function solution(today, terms, privacies) {
  const termsMap = new Map(terms.map((term) => {
    const [title, period] = term.split(' ');
    return [title, parseInt(period) * 28];
  }));

  const todayArr = today.split('.').map((el) => parseInt(el));

  return privacies.map((privacy, privacyIdx) => {
    const [date, title] = privacy.split(' ');
    const dateArr = date.split('.').map((el) => parseInt(el));

    const diffDays = todayArr.reduce((sum, cur, idx) => {
      const factor = [12 * 28, 28, 1][idx];
      return sum + (cur - dateArr[idx]) * factor;
    }, 0);
    
    const period = termsMap.get(title);
    return diffDays >= period ? privacyIdx + 1 : -1;
  }).filter((el) => el !== -1);
}


