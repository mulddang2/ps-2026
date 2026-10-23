function solution(name, yearning, photo) {
  const result = [];

  for (const p of photo) {
    let score = 0;
    for (let i = 0; i < p.length; i++) {
      if (name.indexOf(p[i]) !== -1) {
        score += yearning[name.indexOf(p[i])];
      }
    }
    result.push(score);
  }
  return result;
}

console.log(
  solution(
    ['may', 'kein', 'kain', 'radi'],
    [5, 10, 1, 3],
    [
      ['may', 'kein', 'kain', 'radi'],
      ['may', 'kein', 'brin', 'deny'],
      ['kon', 'kain', 'may', 'coni'],
    ],
  ),
);
console.log(
  solution(
    ['kali', 'mari', 'don'],
    [11, 1, 55],
    [
      ['kali', 'mari', 'don'],
      ['pony', 'tom', 'teddy'],
      ['con', 'mona', 'don'],
    ],
  ),
);
console.log(
  solution(
    ['may', 'kein', 'kain', 'radi'],
    [5, 10, 1, 3],
    [['may'], ['kein', 'deny', 'may'], ['kon', 'coni']],
  ),
);
