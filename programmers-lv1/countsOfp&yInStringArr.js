function solution(s) {
  let p = 0,
    y = 0;

  for (const c of s.toLowerCase()) {
    if (c === 'p') p++;
    if (c === 'y') y++;
  }
  return p === y;
}

console.log(solution('pPoooyY'));
console.log(solution('Pyy'));
