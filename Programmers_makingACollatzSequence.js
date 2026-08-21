function solution(n) {
  const result = [n];

  while (n !== 1) {
    if (n % 2 !== 0) {
      n = 3 * n + 1;
      result.push(n);
    } else {
      n = n / 2;
      result.push(n);
    }
  }
  return result;
}

console.log(solution(10))