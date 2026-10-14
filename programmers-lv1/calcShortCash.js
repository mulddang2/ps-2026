/** NOTE:
 * [x] 등차수열의 합 공식으로 풀어보기
 */
function solution(price, money, count) {
  const totalPrice = (price * count * (count + 1)) / 2;
  return totalPrice > money ? totalPrice - money : 0;
}

console.log(solution(3, 20, 4));
console.log(solution(1, 1000000000, 2500));
