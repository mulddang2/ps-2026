/** NOTE:
 * [x] 완주자 처리 후, 마지막에 participant 배열 또 순회 -- 재 탐색 없이 Map을 직접 순회하기
 * [x] if-else문을 통해 카운트 증가시키는 부분 -- 옵셔널 체이닝이나 논리연산자 활용해보기
 * [x] sorting 방식으로 적용해보기
 */
function solution(participant, completion) {
  participant.sort();
  completion.sort();

  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      return participant[i];
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
