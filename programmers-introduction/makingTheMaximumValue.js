function solution(numbers) {
  // 오름차순 정렬
  numbers.sort((a, b) => a - b);

  const n = numbers.length;
  // 가장 작은 두 음수의 곱 vs 가장 큰 두 양수의 곱
  return Math.max(numbers[0] * numbers[1], numbers[n - 1] * numbers[n - 2]);
}

console.log(solution([1, 2, -3, 4, -5]));
console.log(solution([0, -31, 24, 10, 1, 9]));
console.log(solution([10, 20, 30, 5, 5, 20, 5]));
