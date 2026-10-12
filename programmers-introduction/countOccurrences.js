function solution(array, n) {
  return array.filter((v) => v === n).length;
}

console.log(solution([1, 1, 2, 3, 4, 5], 1));
console.log(solution([0, 2, 3, 4], 1));
