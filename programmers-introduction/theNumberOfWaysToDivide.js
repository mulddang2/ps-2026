function solution(balls, share) {
  // BigInt 타입으로 초기화
  let result = 1n;

  for (let i = 0; i < share; i++) {
    result = (result * BigInt(balls - i)) / BigInt(i + 1);
  }

  return Number(result);
}
console.log(solution(3, 2));
console.log(solution(1, 1));
console.log(solution(30, 30));
console.log(solution(5, 3));
