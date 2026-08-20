/** NOTE:
 * [x] 마지막 if(uniqueParamCount === 3) 조건 제거
 * [x] 변수명 수정 uniqueParamCount, sumOfTwoSquares
 * [x] 분기 순서를 3 -> 2 -> 1로 뒤집기
 */

function solution(a, b, c) {
  const kind = new Set([a, b, c]).size;
  const sum = a + b + c;

  if (kind === 3) return sum;

  const sumOfSquares = a ** 2 + b ** 2 + c ** 2;
  if (kind === 2) return sum * sumOfSquares;

  return sum * sumOfSquares * (a ** 3 + b ** 3 + c ** 3);
}

console.log(solution(2, 6, 1));
console.log(solution(5, 3, 3));
console.log(solution(4, 4, 4));
