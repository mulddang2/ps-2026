/** NOTE:
 * [x] dot[0] > 0 이 거짓이면 무조건 dot[0] < 0 임이 보장되기 때문에 else if 작성이 불필요.
 */
function solution([x, y]) {
  return x > 0 ? (y > 0 ? 1 : 4) : y > 0 ? 2 : 3;
}

console.log(solution([2, 4]));
console.log(solution([-7, 9]));
