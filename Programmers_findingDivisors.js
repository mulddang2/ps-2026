function solution(n) {
  const result = [];
  
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      result.push(i);
    }
  }
  return result;
}

console.log(solution(24));
console.log(solution(29));
