function solution(n) {
  let count = 0;
  for (let i = 4; i <= n; i++) {
    const numArr = [];
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        numArr.push(j);
      }
    }
    if (numArr.length >= 3) {
      count++;
    }
  }
  return count;
}

console.log(solution(10));
console.log(solution(15));
