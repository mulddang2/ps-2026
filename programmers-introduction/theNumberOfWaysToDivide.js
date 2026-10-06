function solution(balls, share) {
  let n = balls;
  let m = share;

  function factorial(number) {
    let i = number;
    let result = number;
    if (i <= 1) {
      return 1;
    }

    while (i > 1) {
      i--;

      result *= i;
    }
    return result;
  }

  return factorial(n) / (factorial(n - m) * factorial(m));
}
// console.log(solution(3, 2));
// console.log(solution(1, 1));
console.log(solution(30, 30));
// console.log(solution(5, 3));
