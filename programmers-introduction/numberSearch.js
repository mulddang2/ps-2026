/** NOTE:
 * [x] 문자열 할당 없이 모듈러 연산 활용하기
 * [x] 내장 메소드 활용 시, 매개변수 타입을 명시적으로 변환하여 불확실성 제거하기
 * [x] 반복적인 객체 생성 대신, 원시 타입 기반 연산을 우선 고려하여 런타임 효율성 극대화하기.
 */
function solution(num, k) {
  // 1. num의 전체 자릿수 계산
  const digits = Math.floor(Math.log10(num)) + 1;
  // 2. 가장 높은 자릿수(왼쪽)부터 k와 비교
  for (let pos = 1; pos <= digits; pos++) {
    const divider = Math.pow(10, digits - pos);
    const digit = Math.floor(num / divider) % 10;
    if (digit === k) return pos;
  }
  return -1;
}

console.log(solution(29183, 1));
console.log(solution(232443, 4));
console.log(solution(123456, 7));
console.log(solution(0, 0));
