/** NOTE:
 * [x] lux, luy 변수 초기값 수정 -- 배열 최대 크기로 초기화
 * [x] 반복문 내부 매번 Math 함수 호출부 -> if 직접 사용하면 미세하게 더 유리함
 */
function solution(wallpaper) {
  // x축 가장 작은 값 , y축 가장 작은값
  let lux = wallpaper.length;
  let luy = wallpaper[0].length;
  let rdx = 0;
  let rdy = 0;

  for (let i = 0; i < wallpaper.length; i++) {
    for (let j = 0; j < wallpaper[i].length; j++) {
      if (wallpaper[i][j] === '#') {
        if (i < lux) lux = i;
        if (j < luy) luy = j;
        if (i + 1 > rdx) rdx = i + 1;
        if (j + 1 > rdy) rdy = j + 1;
      }
    }
  }

  return [lux, luy, rdx, rdy];
}

console.log(solution(['.#...', '..#..', '...#.']));
console.log(
  solution([
    '..........',
    '.....#....',
    '......##..',
    '...##.....',
    '....#.....',
  ]),
);
console.log(
  solution([
    '.##...##.',
    '#..#.#..#',
    '#...#...#',
    '.#.....#.',
    '..#...#..',
    '...#.#...',
    '....#....',
  ]),
);
console.log(solution(['..', '#.']));
