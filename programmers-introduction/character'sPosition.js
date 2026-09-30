function solution(keyinput, board) {
  const dir = {
    up: [0, 1],
    down: [0, -1],
    left: [-1, 0],
    right: [1, 0],
  };

  let bx = board[0];
  let by = board[1];
  let cx = 0;
  let cy = 0;

  for (let i = 0; i < keyinput.length; i++) {
    if (
      cx < Math.floor(bx / 2) &&
      cy < Math.floor(by / 2) &&
      cx > -Math.floor(bx / 2) &&
      cy > -Math.floor(by / 2)
    ) {
      cx += dir[keyinput[i]][0];
      cy += dir[keyinput[i]][1];
    }
  }
  return [cx, cy];
}

console.log(solution(['left', 'right', 'up', 'right', 'right'], [11, 11]));
console.log(solution(['down', 'down', 'down', 'down', 'down'], [7, 9]));
