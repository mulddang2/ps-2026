/** NOTE:
 * 1. 불필요한 배열 할당 제거
 * [x] 단일 정수 변수만 활용하여 N번째 숫자 추적하기
 * [x] 배열 생성 없이 결과값만 상태 변수에 저장하기
 *
 * 2. 문자열 타입 변환 연산 최소화
 * [x] 반복문 내 반복적인 String()객체 생성 자제하기
 * [x] 필요 시, 수학적 연산으로 자릿수 검사하기
 *
 * 3. 중첩 루프 구조 단순화하기
 * [x] 가독성 뛰어난 단일 카운팅 루프 패턴 적용하기
 * [x] 변수 제어 지점을 단순화하여 버그 위험 줄이기
 *
 */
function solution(n) {
  let result = 0;

  for (let i = 0; i < n; i++) {
    result++;
    while (result % 3 === 0 || String(result).includes('3')) {
      result++;
    }
  }
  return result;
}

console.log(solution(15));
console.log(solution(40));
