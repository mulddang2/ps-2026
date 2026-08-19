/** FIXME:
 * [x] 중간 배열 제거
 */
function solution(a, d, included) {
  return included.reduce((acc, ok, i) => (ok ? acc + a + d * i : acc), 0);
}

console.log(solution(3, 4, [true, false, false, true, true]));
console.log(solution(7, 1, [false, false, false, true, false, false, false]));
