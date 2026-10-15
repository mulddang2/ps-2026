const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

function solution(n, m) {
  const nmGcd = gcd(n, m);
  const lcm = (n * m) / nmGcd;
  return [nmGcd, lcm];
}

console.log(solution(3, 12));
console.log(solution(2, 5));
