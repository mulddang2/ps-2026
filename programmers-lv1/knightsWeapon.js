function solution(number, limit, power) {
  const divisor = [];
  let total = 0;
  for (let i = 1; i <= number; i++) {
    let count = 0;
    if (i === 1) {
      count++;
      divisor.push(count);
      continue;
    }
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        count++;
      }
    }
    divisor.push(count);
  }
  for (let i = 0; i < divisor.length; i++) {
    if (divisor[i] > limit) total += power;
    else total += divisor[i];
  }
  return total;
}

console.log(solution(5, 3, 2));
console.log(solution(10, 3, 2));
console.log(solution(16, 3, 2));
