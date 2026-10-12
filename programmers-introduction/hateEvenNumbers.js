function solution(n) {
  const result = [];
  let i = 1;
  while (i <= n) {
    result.push(i);
    i += 2;
  }
  return result;
}

console.log(solution(10));
console.log(solution(15));
