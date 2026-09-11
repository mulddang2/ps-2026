function solution(n, t) {
  let count = n;
  let i = 0;
  while (i < t) {
    count = count * 2;
    i++;
  }
  return count;
}

console.log(solution(2, 10));
console.log(solution(7, 15));
