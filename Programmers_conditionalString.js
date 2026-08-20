/** NOTE:
 * [x] 1. 굳이 answer가 필요없다. let 변수로 상태를 추적해야하는 번거로움이 있음
 *      -> 바로 return 하는 형태가 의도 분명해짐
 * [x] 2. 중첩 if 대신 조합을 하나의 키로 대체
 *
 */
const compare = {
  '>!': (a, b) => a > b,
  '>=': (a, b) => a >= b,
  '<!': (a, b) => a < b,
  '<=': (a, b) => a <= b,
};

function solution(ineq, eq, n, m) {
  return Number(compare[ineq + eq](n, m));
}

console.log(solution('<', '=', 20, 50)); // 1
console.log(solution('>', '!', 41, 78)); // 0
console.log(solution('>', '!', 40, 40)); // 0 (같은 값)
