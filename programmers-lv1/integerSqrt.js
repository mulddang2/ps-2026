/** NOTE:
 * [x] isInteger 메서드 활용해보기
 */
function solution(n) {
  const x = Math.sqrt(n);
  return Number.isInteger(x) ? (x + 1) ** 2 : -1;
}

console.log(solution(121));
console.log(solution(1));
