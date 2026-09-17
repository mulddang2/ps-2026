/** NOTE:
 * [x] isOneOdd 변수의 논리 오류 가능성 -- a % 2 !== 0 || b % 2 !== 0 표현식은 둘다 홀수 일 때도 true이기 때문에 논리가 안맞음. --> 하나만 홀수 일 때는, (a % 2) !== (b % 2) 형식이 정확함.
 * [x] 홀수의 개수를 기준으로 조건 분기 작성해보기
 */
function solution(a, b) {
  const oddCount = (a % 2 !== 0) + (b % 2 !== 0);

  if (oddCount === 2) return a ** 2 + b ** 2;
  if (oddCount === 1) return 2 * (a + b);
  return Math.abs(a - b);
}

console.log(solution(3, 5));
console.log(solution(6, 1));
console.log(solution(2, 4));
