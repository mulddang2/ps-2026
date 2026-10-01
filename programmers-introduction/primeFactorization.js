function solution(n) {
  const result = [];

  let i = 2;
  while (n > 1) {
    while (n % i === 0) {
      n /= i;
      result.push(i);
    }
    i++;
  }

  return [...new Set(result)];
}

console.log(solution(12));
console.log(solution(17));
console.log(solution(420));
