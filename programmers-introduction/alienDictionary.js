/** NOTE:
 * 1. 루프 내부 불필요한 객체 생성 제거하기
 * [x] 반복문 안에서 new Int8Array와 같이 메모리를 재할당하는 패턴 지양하기
 * [x] 불필요한 GC 부하를 방지하기 위해 내장 고차 함수 활용하기
 *
 * 2. 조건문 단축 평가 위치 최적화하기
 * [x] 길이가 일치하지 않는 경우 문자 비교 전에 빠르게 걸러내도록 조건문 상단 배치하기
 * [x] 불필요한 내부 루프 실행을 사전에 차단하기
 *
 * 3. js 배열 고차 함수 적극 활용하기
 * [x] 단순 for 루프 대신 some, every, includes등 고차함수로 가독성과 의도 명확히 하기
 * [x] 문제 제한 조건(N<=10)을 확인하여 간결한 표준 패턴 채택하기
 */
function solution(spell, dic) {
  // dic.some -> dic의 단어들 중 조건 만족하는 단어가 하나라도 존재하는지 검사, 하나 존재하면 조기리턴 하는 장점
  return dic.some(
    (word) =>
      // spell.every(ch=> word.includes(ch)) -> spell에 담긴 모든 알파벳이 조건식을 만족해야 true, 중간에 한개라도 포함안되어 있으면 false 반환
      word.length === spell.length && spell.every((ch) => word.includes(ch)),
  )
    ? 1
    : 2;
}

console.log(solution(['p', 'o', 's'], ['sod', 'eocd', 'qixm', 'adio', 'soo']));
console.log(solution(['z', 'd', 'x'], ['def', 'dww', 'dzx', 'loveaw']));
console.log(
  solution(['s', 'o', 'm', 'd'], ['moos', 'dzx', 'smm', 'sunmmo', 'som']),
);
