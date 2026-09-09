function solution(board, k) {
  let totalSum = 0;

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (i + j <= k) totalSum += board[i][j];
      else if (i + j > k) break;
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
