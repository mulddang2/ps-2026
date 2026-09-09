/** NOTE:
 * [x] 바깥쪽 루프 범위 최적화 -- i > k 범위의 불필요한 행 탐색 차단, Math.min(n-1, k)를 통해 바깥쪽 반복문의 최대 인덱스 사전에 지정
 * [x] if 분기문 및 break절 제거하여 코드 가독성 및 탐색 속도 향상하기
 * [x] j의 탐색 상한인 k - i와 행 길이 중 작은 값을 반복 조건으로 설정하기
 * [x] 반복문 조건식 마다 board.length에 접근하는 동작 방지하기
 */
function solution(board, k) {
  let totalSum = 0;
  const n = board.length;
  const m = board[0].length;

  // i + j <= k 이므로 i는 k를 초과할 수 없음
  const maxI = Math.min(n - 1, k);

  for (let i = 0; i <= maxI; i++) {
    const maxJ = Math.min(m - 1, k - i);
    for (let j = 0; j <= maxJ; j++) {
      totalSum += board[i][j];
    }
  }
  return totalSum;
}

console.log(
  solution(
    [
      [0, 1, 2],
      [1, 2, 3],
      [2, 3, 4],
      [3, 4, 5],
    ],
    2,
  ),
);
