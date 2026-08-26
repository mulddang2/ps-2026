function solution(arr, intervals) {
  const [a, b] = intervals[0];
  const [c, d] = intervals[1];

  return arr.slice(a, b + 1).concat(arr.slice(c, d + 1));
}

console.log(
  solution(
    [1, 2, 3, 4, 5],
    [
      [1, 3],
      [0, 4],
    ],
  ),
);
