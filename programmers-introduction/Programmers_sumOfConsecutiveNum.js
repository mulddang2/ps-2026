function solution(num, total) {
  const firstPoint = (total - ((num - 1) * num) / 2) / num;

  const result = new Array(num).fill(firstPoint).map((n, idx) => n + idx);

  return result;
}

console.log(solution(3, 12));
console.log(solution(5, 15));
console.log(solution(4, 14));
console.log(solution(5, 5));
