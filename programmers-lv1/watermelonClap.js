/** NOTE:
 * [x] c++레벨 내장 메서드 활용 -- repeat, slice
 */
function solution(n) {
  return '수박'.repeat(Math.ceil(n / 2)).slice(0, n);
}

console.log(solution(3));
console.log(solution(4));
