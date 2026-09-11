/** NOTE:
 * [x] String 변환 및 split()을 이용한 동적 배열 생성 구문을 피하고, 기본 숫자 타입만 활용하기
 * [x] 수학적 연산 알고리즘으로 전환 -- 나머지 연산자와 몫 활용
 * [x] 중복 단항 연산자 및 형변환 정리
 * [x] 경계 조건 엣지 케이스 검증 -- 입력값 0처리 확인
 */
function solution(n) {
  let sum = 0;

  while (n > 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }
  return sum;
}

console.log(solution(1234));
console.log(solution(930211));
