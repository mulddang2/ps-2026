/** NOTE:
 * [x] 변수명 직관적으로 수정
 * [x] for...of 적용
 */
function solution(n, m, section) {
  let count = 0;
  let paintedUntil = 0;

  for (const spot of section) {
    if (paintedUntil <= spot) {
      count++;
      paintedUntil = spot + m;
    }
  }

  return count;
}

console.log(solution(8, 4, [2, 3, 6]));
console.log(solution(5, 4, [1, 3]));
console.log(solution(4, 1, [1, 2, 3, 4]));
