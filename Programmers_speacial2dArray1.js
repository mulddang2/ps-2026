function solution(n) {
  const arr = Array.from(Array(n), () => new Array(n).fill(n));

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      i === j ? (arr[i][j] = 1) : (arr[i][j] = 0);
    }
  }
  return arr;
}

console.log(solution(3));
console.log(solution(6));
console.log(solution(1));
