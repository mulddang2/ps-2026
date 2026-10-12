const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

function solution(n) {
  // 최소공배수 = a * b / (a,b의 최대공약수)
  return n / gcd(6, n);
}

console.log(solution(6));
console.log(solution(10));
console.log(solution(4));
