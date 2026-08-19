/** FIXME:
 * [x] 1. 굳이 answer가 필요없다. let 변수로 상태를 추적해야하는 번거로움이 있음
 *      -> 바로 return 하는 형태가 의도 분명해짐
 * [] 2. 중첩 if 대신 조합을 하나의 키로
 * [] 3. 더 짧게 -- '='는 같은 때도 참을 더하는 옵션일 뿐
 *
 * [] 4.
 *
 */
function solution(ineq, eq, n, m) {
  if (ineq === ">") {
    if (eq === "!") return Number(n > m);
    if (eq === "=") return Number(n >= m);
  }
  if (ineq === "<") {
    if (eq === "!") return Number(n < m);
    if (eq === "=") return Number(n <= m);
  }
  return 0;
}

console.log(solution("<", "=", 20, 50)); // 1
console.log(solution(">", "!", 41, 78)); // 0
console.log(solution(">", "!", 40, 40)); // 0 (같은 값)
