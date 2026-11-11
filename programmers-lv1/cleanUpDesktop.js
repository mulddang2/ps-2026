function solution(wallpaper) {
  // x축 가장 작은 값 , y축 가장 작은값
  let lux = Infinity;
  let luy = Infinity;
  let rdx = 0;
  let rdy = 0;

  for (let i = 0; i < wallpaper.length; i++) {
    for (let j = 0; j < wallpaper[i].length; j++) {
      if (wallpaper[i][j] === '#') {
        lux = Math.min(lux, i);
        luy = Math.min(luy, j);
        rdx = Math.max(rdx, i + 1);
        rdy = Math.max(rdy, j + 1);
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
