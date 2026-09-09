/** NOTE:
 * [x] 비교식 순서: i >= end_num 가 더 자연스러움
 * [x] Array.from 으로 루프 없이 표현가능
 */
function solution(start_num, end_num) {
  return Array.from(
    { length: start_num - end_num + 1 },
    (_, i) => start_num - i,
  );
}

console.log(solution(10, 3));
