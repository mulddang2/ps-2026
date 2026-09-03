function solution(rank, attendance) {
  const position = new Int32Array(attendance.length);
  attendance.map((v, i) => {
    if (v) {
      position[i] = rank[i];
    }
  });

  const removeZero = position.filter((item) => item !== 0);

  let a;
  let b;
  let c;

  const [aRank, bRank, cRank] = removeZero.sort((a, b) => a - b).slice(0, 3);
  position.map((rank, i) => {
    switch (rank) {
      case aRank:
        a = i;
        break;
      case bRank:
        b = i;
        break;
      case cRank:
        c = i;
        break;
    }
  });

  return 10000 * a + 100 * b + c;
}

console.log(
  solution(
    [3, 7, 2, 5, 4, 6, 1],
    [false, true, true, true, true, false, false],
  ),
);
console.log(solution([1, 2, 3], [true, true, true]));
console.log(
  solution([6, 1, 5, 2, 3, 4], [true, false, true, false, false, true]),
);
