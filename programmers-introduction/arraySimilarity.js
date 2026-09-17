/** NOTE:
 * [x] 삼항 연산자를 반환값 활용이 아닌 부수 효과용 조건문 처럼 다룬 것 수정 -> 안티 패턴
 * [x] 현재 시간 복잡도 (O(N * M)) -> O((N + M)) 으로 줄여보기: s2의 각 원소 M 마다 s1.includes(N)를 실행
 */
function solution(s1, s2) {
  const s1Set = new Set(s1);
  return s2.filter((v) => s1Set.has(v)).length;
}

console.log(solution(['a', 'b', 'c'], ['com', 'b', 'd', 'p', 'c']));
console.log(solution(['n', 'omg'], ['m', 'dot']));
