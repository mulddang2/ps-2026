function solution(n) {
  let total = 1;
  while ((6 * total) % n !== 0) {
    total += 1;
  }
  return total;
}

console.log(solution(6));
console.log(solution(10));
console.log(solution(4));
