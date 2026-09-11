/** NOTE:
 * [x] 반복문 대신 단항/이항 수학 연산식으로 전환하기
 * [x] 비트 연산자 활용 검토 -- 2의 거듭제곱 관련 문제에서 시프트 연산 적용
 * [x] 변수 최소화
 */
function solution(n, t) {
  // 1. 비트 왼쪽 시프트 연산 활용
  // return n << t;
  // 2. 거듭제곱 연산자 활용
  return n * 2 ** t;
}

console.log(solution(2, 10));
console.log(solution(7, 15));
