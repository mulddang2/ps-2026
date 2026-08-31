function solution(arr, queries) {
  const result = [...arr];

  for (const [s, e] of queries) {
    for (let i = s; i <= e; i++) {
      result[i]++;
    }
  }
  return result;
}

console.log(
  solution(
    [0, 1, 2, 3, 4],
    [
      [0, 1],
      [1, 2],
      [2, 3],
    ],
  ),
);
