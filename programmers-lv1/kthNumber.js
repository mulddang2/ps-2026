function solution(array, commands) {
  return commands.map(
    ([a, b, c]) => array.slice(a - 1, b).sort((a, b) => a - b)[c - 1],
  );
}

console.log(
  solution(
    [1, 5, 2, 6, 3, 7, 4],
    [
      [2, 5, 3],
      [4, 4, 1],
      [1, 7, 3],
    ],
  ),
);
