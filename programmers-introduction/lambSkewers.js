function solution(n, k) {
  const service = Math.floor(n / 10);
  return n * 12000 + k * 2000 - service * 2000;
}

console.log(solution(10, 3));
console.log(solution(64, 6));
