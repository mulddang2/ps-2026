function solution(n) {
  let factorial = 1;
  let i = 1;
  
  while(factorial * i <= n) {
    i++;
    factorial *= i;
  }
  return i;
}

console.log(solution(3628800));
console.log(solution(7));
