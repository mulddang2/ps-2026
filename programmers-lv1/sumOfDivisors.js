/** NOTE:
 * [x] 제곱근 활용해서 연산 횟수 단축하기 (약수의 대칭성 활용)
 */
function solution(n) {
  let total = 0;

  for (let i = 1; i * i <= n; i++) {
    if (n % i === 0) {
      total += i;
      if (i * i !== n) {
        total += n / i;
      }
    }
  }
  return total;
}

console.log(solution(0));
console.log(solution(12));
console.log(solution(5));
