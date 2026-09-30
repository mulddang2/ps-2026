/** NOTE:
 * 1. 네가지 경계 조건이 &&로 연결되어 있어 어느 한쪽 축이라도 맵 끝에 도달하면 캐릭터의 모든 이동이 완전히 동결되는 문제
 * 2. 경계 체크는 이동하려는 축별로 독립적으로 적용되어야 한다. 현재 위치가 아닌 '이동을 시도하는 다음 좌표'를 기준으로 판별해야한다.
 * 3. 루프 내 불필요한 연산 수정하기
 */
function solution(keyinput, board) {
  const dir = {
    up: [0, 1],
    down: [0, -1],
    left: [-1, 0],
    right: [1, 0],
  };

  let maxX = Math.floor(board[0] / 2);
  let maxY = Math.floor(board[1] / 2);
  let x = 0;
  let y = 0;

  for (const key of keyinput) {
    const [dx, dy] = dir[key];
    const nx = x + dx;
    const ny = y + dy;

    if (Math.abs(nx) <= maxX && Math.abs(ny) <= maxY) {
      x = nx;
      y = ny;
    }
  }
  return [x, y];
}

console.log(solution(['left', 'right', 'up', 'right', 'right'], [11, 11]));
console.log(solution(['down', 'down', 'down', 'down', 'down'], [7, 9]));
