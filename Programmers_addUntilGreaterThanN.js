function solution(numbers, n) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (sum <= n) {
      sum += numbers[i];
    } else sum;
  }
  return sum;
}

console.log(solution([34, 5, 71, 29, 100, 34], 123));
console.log(solution([58, 44, 27, 10, 100], 139));
