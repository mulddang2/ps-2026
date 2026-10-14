/** NOTE:
 * [x] 어떤 수의 약수의 개수가 홀수 개인 경우는 오직 제곱수일 때 뿐이다.!!
 */
function solution(left, right) {
  let total = 0;

  for (let i = left; i <= right; i++) {
    // 제곱수인 경우 약수의 개수가 홀수이므로 뺀다
    if (Number.isInteger(Math.sqrt(i))) {
      total -= i;
    } else {
      total += i;
    }
  }
}

console.log(solution(13, 17));
console.log(solution(24, 27));
