function solution(a, b) {
  const min = Math.min(a, b);
  const max = Math.max(a, b);
  let acc = 0;
  let i = min;

  if (a === b) return a;

  while (i <= max) {
    acc += i;
    i++;
  }
  return acc;
}

console.log(solution(3, 5));
console.log(solution(3, 3));
console.log(solution(5, 3));
