/** NOTE:
 * [x] 불필요한 변수 제거하기
 */
function solution(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 1) return i;
  }
}

console.log(solution(10));
console.log(solution(12));
