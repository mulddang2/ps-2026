function solution(n) {
  const x = Math.trunc(Math.sqrt(n));
  if (x ** 2 === n) return (x + 1) ** 2;
  return -1;
}

console.log(solution(121));
console.log(solution(1));
