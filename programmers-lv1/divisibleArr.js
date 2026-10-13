function solution(arr, divisor) {
  const divisorArr = arr.filter((v) => v % divisor === 0);
  divisorArr.sort((a, b) => a - b);
  return divisorArr.length ? divisorArr : [-1];
}

console.log(solution([5, 9, 7, 10], 5));
console.log(solution([2, 36, 1, 3], 1));
console.log(solution([3, 2, 6], 10));
