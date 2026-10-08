/** NOTE:
 * [x] 나머지 연산자 사용해서 잔돈계산
 */
function solution(money) {
  return [Math.floor(money / 5500), money % 5500];
}

console.log(solution(5500));
console.log(solution(15000));
