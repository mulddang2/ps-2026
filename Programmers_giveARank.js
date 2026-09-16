function solution(score) {
  const average = score.map(([a, b]) => (a + b) / 2);
  const sortedArr = [...average].sort((a, b) => b - a);
  const result = new Array(average.length);

  for(let i = 0; i < average.length; i++) {
    result[i] = sortedArr.indexOf(average[i]) + 1
  }

  return result;
}

console.log(
  solution([
    [80, 70],
    [90, 50],
    [40, 70],
    [50, 80],
  ]),
);
console.log(
  solution([
    [80, 70],
    [70, 80],
    [30, 50],
    [90, 100],
    [100, 90],
    [100, 100],
    [10, 30],
  ]),
);
