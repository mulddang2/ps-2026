/** NOTE:
 * [x] 완주자 처리 후, 마지막에 participant 배열 또 순회 -- 재 탐색 없이 Map을 직접 순회하기
 * [x] if-else문을 통해 카운트 증가시키는 부분 -- 옵셔널 체이닝이나 논리연산자 활용해보기
 */
function solution(participant, completion) {
  // Map 안에 이름을 키, 값은 몇명인지
  const map = new Map();

  // Map에 들어있는 이름의 현재값 기준
  for (const p of participant) {
    map.set(p, (map.get(p) || 0) + 1);
  }
  // 완주자 처리하기
  for (const c of completion) {
    map.set(c, map.get(c) - 1);
  }

  for (const [name, count] of map) {
    if (count > 0) {
      return name;
    }
  }
}

console.log(solution(['leo', 'kiki', 'eden'], ['eden', 'kiki']));
console.log(
  solution(
    ['marina', 'josipa', 'nikola', 'vinko', 'filipa'],
    ['josipa', 'filipa', 'marina', 'nikola'],
  ),
);

console.log(
  solution(['mislav', 'stanko', 'mislav', 'ana'], ['stanko', 'ana', 'mislav']),
);
