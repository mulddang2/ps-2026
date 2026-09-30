/** NOTE:
 * [x] Math.min / Math.max 활용
 */
function solution(keyinput, board) {
  let x = 0;
  let y = 0;

  const maxX = Math.floor(board[0] / 2);
  const maxY = Math.floor(board[1] / 2);

  for (const key of keyinput) {
    switch (key) {
      case 'up':
        y = Math.min(maxY, y + 1);
        break;
      case 'down':
        y = Math.max(-maxY, y - 1);
        break;
      case 'left':
        x = Math.max(-maxX, x - 1);
        break;
      case 'right':
        x = Math.min(maxX, x + 1);
        break;
    }
  }
  return [x, y];
}

console.log(solution(['left', 'right', 'up', 'right', 'right'], [11, 11]));
console.log(solution(['down', 'down', 'down', 'down', 'down'], [7, 9]));
