/** NOTE:
 * [x] 반복문 구조로 리펙토링하기
 */
function solution(n, m) {
  let a = n;
  let b = m;

  // 반복문을 이용한 유클리드 호제법 (최대공약수 구하기)
  while (b > 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }

  const gcdVal = a;
  const lcmVal = (n * m) / gcdVal;

  return [gcdVal, lcmVal];
}

console.log(solution(3, 12));
console.log(solution(2, 5));
