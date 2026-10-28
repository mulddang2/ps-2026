/** NOTE:
 * [x] .filter 사용 시, 조건에 만족하는 새로운 배열이 메모리에 추가되기 때문에, fill을 이용한 초기화 와 카운팅 변수 활용 해보기
 */
function solution(n) {
  // 0 부터 n까지의 인덱스를 다루기 위해, 크기가 n + 1 배열 생성 및 true로 초기화
  const isPrime = new Array(n + 1).fill(true);

  // 0, 1은 소수 아님
  isPrime[0] = false;
  isPrime[1] = false;

  // 에라토스테네스의 체
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= n; j += i) {
        isPrime[j] = false;
      }
    }
  }

  let count = 0;
  for (let i = 2; i <= n; i++) {
    if (isPrime[i]) count++;
  }

  return count;
}

console.log(solution(10));
// console.log(solution(5))
