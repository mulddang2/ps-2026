/** NOTE:
 * [x] 실제 돈 내는 음료(주문 음료 - 서비스 음료)를 구하고 계산하면 곱센 연산 줄이기 가능
 */
function solution(n, k) {
  return n * 12000 + (k - Math.floor(n / 10)) * 2000;
}

console.log(solution(10, 3));
console.log(solution(64, 6));
