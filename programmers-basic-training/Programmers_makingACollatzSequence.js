/** NOTE:
 * [x] result.push(n) 중복삭제
 * [x] 매개변수 n을 직접 재할당 -> 별도 변수로 수정
 * [x] 조건을 긍정형으로 변경 (짝수 먼저)
 */
function solution(n) {
  let x = n
  const result = [x];

  while (x !== 1) {
    x = x % 2 === 0 ? x / 2 : 3 * x + 1
    result.push(x);
  }
  return result;
}

console.log(solution(10))