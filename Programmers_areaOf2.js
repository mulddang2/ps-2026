function solution(arr) {
  return arr.includes(2)
    ? arr.slice(
        arr.findIndex((n) => n === 2),
        arr.findLastIndex((n) => n === 2) + 1,
      )
    : [-1];
}

console.log(solution([1, 2, 1, 4, 5, 2, 9]));
console.log(solution([1, 2, 1]));
console.log(solution([1, 1, 1]));
console.log(solution([1, 2, 1, 2, 1, 10, 2, 1]));
