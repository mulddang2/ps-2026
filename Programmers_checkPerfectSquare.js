/** NOTE:
 * [x] Math.sqrt()는 실수를 반환하기 때문에, 문제 조건에서 아주 큰 정수가 입력될 경우 부동소수점 오차로 Number.isInteger()가 잘못된 결과를 판별할 위험이 있다.
 * [x] Number.isInteger --> 제곱근 정수부를 다시 곱했을 때 원본 정수와 일치하는지로 수정해보기
 */
function solution(n) {
  // 정수 재제곱 검증 방식 활용
  const root = Math.floor(Math.sqrt(n));
  return root * root === n ? 1 : 2;
}
console.log(solution(144));
console.log(solution(976));
