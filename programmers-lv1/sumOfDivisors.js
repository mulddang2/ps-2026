function solution(n) {
  let total = 0;

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      total += i;
    }
  }
  return total;
}

console.log(solution(0));
console.log(solution(12));
console.log(solution(5));
