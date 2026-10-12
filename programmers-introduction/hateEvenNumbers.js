function solution(n) {
  return Array.from({ length: Math.ceil(n / 2) }, (_, i) => i * 2 + 1);
}

console.log(solution(10));
console.log(solution(15));
