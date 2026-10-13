function solution(n) {
  const result = [];
  do {
    result.push(n % 10);
    n = Math.trunc(n / 10);
  } while (n > 0);
  return Number(result.sort((a, b) => b - a).join(''));
}

console.log(solution(118372));
