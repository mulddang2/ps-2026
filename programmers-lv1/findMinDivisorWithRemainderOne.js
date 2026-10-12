function solution(n) {
  let x = 1;
  for (let i = 2; i < n; i++) {
    if (n % i === 1) {
      x = i;
      return x;
    }
  }
}

console.log(solution(10));
console.log(solution(12));
