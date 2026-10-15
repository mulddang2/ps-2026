/** NOTE:
 * [x] 임시변수(result, sumArr) 선언 -> map 중첩으로 변경
 */
function solution(arr1, arr2) {
  return arr1.map((row, i) => row.map((val, j) => val + arr2[i][j]));
}

console.log(
  solution(
    [
      [1, 2],
      [2, 3],
    ],
    [
      [3, 4],
      [5, 6],
    ],
  ),
);

console.log(solution([[1], [2]], [[3], [4]]));
