/** NOTE:
 * [x] 월은 1-12월까지 순서가 고정된 데이터 이기 때문에 배열 사용이 좀더 유리
 * [x] for문 대신 slice, reduce 활용해서 간결화해보기
 *
 */
function solution(a, b) {
  const monthDays = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  //a월 이전달까지의 총 일수 + b일 - 1 (1월 1일 기준 0일쨰부터 시작)
  const totalDays =
    monthDays.slice(0, a - 1).reduce((acc, cur) => acc + cur, 0) + b - 1;

  // 2016년 1월 1일은 금요일(인덱스 5)
  return days[(totalDays + 5) % 7];
}

console.log(solution(5, 24));
