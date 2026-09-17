/** NOTE:
 * [x] 반복적인 인덱스 접근 오버헤드 줄이기
 * [x] 중복 조건 검사 제거하기 -- 아이디 비교 연산을 1회만 수행하도록 삼항 연산자 단일 반환 구조 적용하기
 * [x] key-value 특정에 따른 최적 자료구조 선택하기
 */

function solution(id_pw, db) {
  // 1. 인덱스 기반 for 루프
  // const [targetId, targetPw] = id_pw;

  // for (let i = 0; i < db.length; i++) {
  //   if (db[i][0] === targetId) {
  //     return db[i][1] === targetPw ? 'login' : 'wrong pw';
  //   }
  // }
  // return 'fail';

  // 2. Map 객체 활용 -- key(id)-value(pw) 매핑 구조
  const [targetId, targetPw] = id_pw;
  const dbMap = new Map(db);

  if (!dbMap.has(targetId)) return 'fail';
  return dbMap.get(targetId) === targetPw ? 'login' : 'wrong pw';
}

console.log(
  solution(
    ['meosseugi', '1234'],
    [
      ['rardss', '123'],
      ['yyoom', '1234'],
      ['meosseugi', '1234'],
    ],
  ),
);
console.log(
  solution(
    ['programmer01', '15789'],
    [
      ['programmer02', '111111'],
      ['programmer00', '134'],
      ['programmer01', '1145'],
    ],
  ),
);
console.log(
  solution(
    ['rabbit04', '98761'],
    [
      ['jaja11', '98761'],
      ['krong0313', '29440'],
      ['rabbit00', '111333'],
    ],
  ),
);
