/** NOTE:
 * [x] filter 활용해보기
 */
function solution(array, height) {
  return array.filter((v) => v > height).length;
}

console.log(solution([149, 180, 192, 170], 167));
console.log(solution([180, 120, 140], 190));
