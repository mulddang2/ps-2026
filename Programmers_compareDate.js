function solution(date1, date2) {
  return Number(date1.join('')) < Number(date2.join('')) ? 1 : 0;
}

console.log(solution( [2024, 10, 1], [2024, 9, 30]));
console.log(solution([2021, 12, 28], [2021, 12, 29]));
console.log(solution([1024, 10, 24], [1024, 10, 24]));
