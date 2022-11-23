function solution(id_pw, db) {
  const [id, pw] = id_pw;
  const dbMap = new Map(db);

  return dbMap.has(id) ? (dbMap.get(id) === pw ? 'login' : 'wrong pw') : 'fail';
}
