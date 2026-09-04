function solution(a, b) {
  const isBothOdd = a % 2 !== 0 && b % 2 !== 0;
  const isOneOdd = a % 2 !== 0 || b % 2 !== 0;

  if (isBothOdd) {
    return a ** 2 + b ** 2;
  } else if (isOneOdd) {
    return 2 * (a + b);
  } else return Math.abs(a - b);
}

console.log(solution(3, 5));
console.log(solution(6, 1));
console.log(solution(2, 4));
