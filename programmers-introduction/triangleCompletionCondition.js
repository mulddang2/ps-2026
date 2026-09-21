/** NOTE:
 * [x] 반복문 사용 전 대수적 계산식 도출하기
 * [x] sort 대신 Math.min 활용하기
 * [x] for 루프 제거 및 상수시간 연산(O(1)) 적용하기
 */
function solution(sides) {
  const [sideA, sideB] = sides;

  const minSide = Math.min(sideA, sideB);

  return minSide * 2 - 1;
}

console.log(solution([1, 2]));
console.log(solution([3, 6]));
console.log(solution([11, 7]));
