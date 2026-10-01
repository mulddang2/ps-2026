/** NOTE:
 * - 조건식에서 현재 i가 아닌!! 다음에 곱할 숫자를 곱했을 때, n 이하인지 확인하도록 수정
 */
function solution(n) {
  let factorial = 1;
  let i = 1;

  while (factorial * (i + 1) <= n) {
    i++;
    factorial *= i;
  }
  return i;
}

console.log(solution(3628800));
console.log(solution(7));
