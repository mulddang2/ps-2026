function solution(n) {
  let count = 0;
  for(let i = 1; i <= n; i++) {
    let j = Math.floor(n / i);
    if(i * j === n) count++;
  }
  return count;
}

console.log(solution(20))
console.log(solution(100))