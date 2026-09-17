/** NOTE:
 * [x] 이중 반복문 -> 차분 배열 + 누적합으로 교체 개선
 * [x] 차분 배열 길이를 arr.length + 1로 잡아 diff[e + 1] 범위 초과 방지
 * [x] 결과 생성은 map으로 처리해 [...arr] 복사 단계 제거
 * [x] 엣지 케이스 확인 s===e(단일 원소), e === arr.length - 1 (마지막 인덱스), 쿼리 1개
 * [x] !!!!구간 업데이트 = 차분 배열 패턴!!!!
 */
function solution(arr, queries) {
  const diff = new Array(arr.length + 1).fill(0);

  for (const [s, e] of queries) {
    diff[s] += 1;
    diff[e + 1] -= 1;
  }

  // acc: 몇개의 쿼리 구간에 겹쳐있는가
  let acc = 0;
  return arr.map((v, i) => {
    acc += diff[i];
    return v + acc;
  });
}

// console.log(
//   solution(
//     [0, 1, 2, 3, 4],
//     [
//       [0, 1],
//       [1, 2],
//       [2, 3],
//     ],
//   ),
// );

console.log(
  solution(
    [0, 1, 2, 3, 4],
    [
      [1, 1],
      [2, 2],
      [4, 4],
    ],
  ),
);
