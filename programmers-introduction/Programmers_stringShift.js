/** NOTE:
 * [x] 중첩 배열 생성 및 불필요한 연산 삭제
 */
function solution(A, B) {
  return (B + B).indexOf(A);
}

console.log(solution('hello', 'ohell'));
console.log(solution('apple', 'elppa'));
console.log(solution('atat', 'tata'));
console.log(solution('abc', 'abc'));
