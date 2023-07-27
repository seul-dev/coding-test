function solution(record) {
  const message = {
    Leave: '님이 나갔습니다.',
    Enter: '님이 들어왔습니다.',
  };

  const map = new Map();

  return record
    .reduce((acc, cur) => {
      const [state, uid, name] = cur.split(' ');
      if (name) {
        map.set(uid, name);
      }
      if (state !== 'Change') {
        acc.push({ state, uid });
      }
      return acc;
    },[])
    .map(({ state, uid }) => {
      return `${map.get(uid)}${message[state]}`;
    });
}
