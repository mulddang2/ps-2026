/** NOTE:
 * [] 경계 조건 및 예외 케이스 검증
 *  - 배열 간에 < 연산자 사용 시, 두 배열이 각각 문자열로 자동 변환되어 비교됨. --> 문자열 사전 순 비교 시, 다섯번째 글자 '1'과 '9'를 비교하게 되기 때문에 "2024,10,1"이 "2024,9,30"보다 더 작은 값으로 판단되어 잘못된 결과(1)가 나옴.
 * [] Date 객체 활용 권장 혹은 순차적 요소 숫자로 직접 비교
 */
function solution(date1, date2) {
  // 1. Date 객체 활용 (m부분만 0based 이기때문에 -1해야함)
  // const [y1, m1, d1] = date1;
  // const [y2, m2, d2] = date2;
  // return new Date(y1, m1 - 1, d1) < new Date(y2, m2 - 1, d2) ? 1 : 0;

  // 2. 순차적 요소 숫자로 직접 비교
  const [y1, m1, d1] = date1;
  const [y2, m2, d2] = date2;

  if (y1 !== y2) return y1 < y2 ? 1 : 0;
  if (m1 !== m2) return m1 < m2 ? 1 : 0;
  return d1 < d2 ? 1 : 0;
}

console.log(solution([2024, 10, 1], [2024, 9, 30]));
console.log(solution([2021, 12, 28], [2021, 12, 29]));
console.log(solution([1024, 10, 24], [1024, 10, 24]));
