/** NOTE:
 * 1. 탐색 범위 최적화
 */

function solution(n) {
  const result = [];

  // 1. sqrt(n)까지만 탐색
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      result.push(i);

      while (n % i === 0) {
        n /= i;
      }
    }
  }

  // 2. 루프 종료 후 n이 1보다 크면 남은 값 자체가 마지막 소인수
  if (n > 1) {
    result.push(n);
  }

  return result;
}

console.log(solution(12));
console.log(solution(17));
console.log(solution(420));
