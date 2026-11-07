function solution(board, moves) {
  let answer = 0;
  const basket = [];

  // moves 순회
  for (let i = 0; i < moves.length; i++) {
    const col = moves[i] - 1;
    for (let row = 0; row < board.length; row++) {
      if (board[row][col] !== 0) {
        // 위에서 아래로 탐색
        const doll = board[row][col];
        board[row][col] = 0;

        // basket에 넣기전, 혹은 넣은 후에
        // 바구니 맨 위 인형과 doll이 같은지 비교
        if (basket[basket.length - 1] === doll) {
          basket.pop();
          answer += 2;
        } else {
          basket.push(doll);
        }
        break;
      }
    }
  }
  return answer;
}

console.log(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4],
  ),
);
