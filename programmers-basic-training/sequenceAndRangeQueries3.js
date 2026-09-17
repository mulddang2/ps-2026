/** NOTE:
 * [x] queries[i][0]], arr[queries[i][1] 반복 접근 제거 -> 가독성 측면
 * [x] 루프 변수 i와 문제의 i가 충돌
 * [x] 입력 배열 arr를 직접 변경(mutation)
 */

function solution(arr, queries) {
  const result = [...arr];

  for (const [i, j] of queries) {
    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
}

console.log(
  solution(
    [0, 1, 2, 3, 4],
    [
      [0, 3],
      [1, 2],
      [1, 4],
    ],
  ),
);
