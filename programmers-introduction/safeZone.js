function solution(board) {
  const n = board.length;
  let safeCount = 0;

  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      if (isSafe(board, r, c, n)) {
        safeCount++;
      }
    }
  }
  return safeCount;
}

function isSafe(board, r, c, n) {
  for (let dr = -1; dr <= 1; dr++) {
    for (let dc = -1; dc <= 1; dc++) {
      const nr = r + dr;
      const nc = c + dc;

      if (nr >= 0 && nr < n && nc >= 0 && nc < n) {
        if (board[nr][nc] === 1) return false;
      }
    }
  }
  return true;
}

console.log(
  solution([
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0],
  ]),
);
console.log(
  solution([
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 1, 1, 0],
    [0, 0, 0, 0, 0],
  ]),
);
console.log(
  solution([
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
  ]),
);
