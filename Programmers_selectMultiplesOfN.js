function solution(n, numlist) {
  return numlist.filter((v) => {
    if (v % n === 0) return v;
  });
}

console.log(solution(3, [4, 5, 6, 7, 8, 9, 10, 11, 12]));
console.log(solution(5, [1, 9, 3, 10, 13, 5]));
console.log(solution(12, [2, 100, 120, 600, 12, 12]));
