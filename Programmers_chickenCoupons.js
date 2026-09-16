/** NOTE:
 * [x] 반복문 내부의 total, extraCoupon 변수를 재할당 연산식으로 통합하기
 * [x] 불변 상태가 유지되는 필수 변수만 최소한으로 남기기
 * [x] 서비스 치킨 1마리당 쿠폰 1개가 환급되는 실질 소모 비율 파악하기
 * [x] 예외조건(chicken === 0)을 고려한 단일 산술 표현식 작성하기
 * [x] chicken = 0 입력 시, 결과값이 0으로 정상 봔환되는지 점검
 * [x] chicken이 10 미만인 구간에서 조건문 연산 결과 확인하기
 */

function solution(chicken) {
  return chicken === 0 ? 0 : Math.floor((chicken - 1) / 9);
}

console.log(solution(100));
console.log(solution(1081));
