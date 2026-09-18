/** NOTE:
 * [x] 최대공약수 코드 -- 재귀(O(log(min(a, b)))) 대신 반복문으로 공간복잡도 O(1) 으로 개선 가능
 */

function solution(a, b) {
  // 1. 최대공약수(GCD) 함수 작성하기, 분자와 분모 약분하여 기약분수로 만들기
  let x = a,
    y = b;
  while (y !== 0) {
    let temp = y;
    y = x % y;
    x = temp;
  }

  // 2. 기약분수의 분모 계산
  let denominator = b / x;

  // 2. while 문으로 소인수 2와 5 제거하기
  while (denominator % 2 === 0) denominator /= 2;

  while (denominator % 5 === 0) denominator /= 5;

  // 3. 남은 분모 값으로 유한소수 판별하기
  return denominator === 1 ? 1 : 2;
}

console.log(solution(7, 20));
console.log(solution(11, 22));
console.log(solution(12, 21));
