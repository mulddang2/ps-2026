/** NOTE:
 * [x] 부동소수점 오차 줄이기 위해 곱셈을 나눗셈보다 먼저 수행하기
 * [x] 대규모 연산이 포함된 문제에서 비트연산자나 Math.trunc() 활용해보기
 */
function solution(num1, num2) {
  return Math.trunc((num1 * 1000) / num2);
}

console.log(solution(3, 2));
console.log(solution(7, 3));
console.log(solution(1, 16));
