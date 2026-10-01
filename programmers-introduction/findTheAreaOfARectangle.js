/** NOTE:
 * 1. dots에 포함된 네 꼭짓점의 순서는 상하좌우 순서대로 정렬되어 입력된다는 보장이 없다.
 * 2. 거리계산 공식 연산 오류 -- 두 좌표 사이 거리는 두 값의 차이에 절댓값을 취해야함.
 */
function solution(dots) {
  // 1. 가로 길이 구하기
  const row = dots[1][0] - dots[0][0];
  console.log(row);
  // 2. 세로 길이 구하기
  const col = Math.abs(dots[1][1]) - Math.abs(dots[0][1]);
  console.log(col)
  
}

console.log(
  solution([
    [1, 1],
    [2, 1],
    [2, 2],
    [1, 2],
  ]),
);
console.log(
  solution([
    [-1, -1],
    [1, 1],
    [1, -1],
    [-1, 1],
  ]),
);
