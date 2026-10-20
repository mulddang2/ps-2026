function solution(sizes) {
  let maxWidth = 0;
  let maxHeight = 0;

  for (const [w, h] of sizes) {
    const longer = Math.max(w, h);
    const shorter = Math.min(w, h);

    if (longer > maxWidth) maxWidth = longer;
    if (shorter > maxHeight) maxHeight = shorter;
  }

  return maxWidth * maxHeight;
}

console.log(
  solution([
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 40],
  ]),
);
console.log(
  solution([
    [10, 7],
    [12, 3],
    [8, 15],
    [14, 7],
    [5, 15],
  ]),
);
console.log(
  solution([
    [14, 4],
    [19, 6],
    [6, 16],
    [18, 7],
    [7, 11],
  ]),
);
