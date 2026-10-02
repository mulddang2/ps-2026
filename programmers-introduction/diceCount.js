function solution(box, n) {
  return box.map((v) => Math.floor(v / n)).reduce((acc, cur) => acc * cur, 1);
}

console.log(solution([1, 1, 1], 1));
console.log(solution([10, 8, 6], 3));
