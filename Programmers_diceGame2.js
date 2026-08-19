function solution(a, b, c) {
  const uniqueParamCount = new Set([a, b, c]).size;
  const sum = a + b + c;
  const sumOfTwoSquares = a ** 2 + b ** 2 + c ** 2;
  const sumOfCubes = a ** 3 + b ** 3 + c ** 3;

  if (uniqueParamCount === 1) {
    return sum * sumOfTwoSquares * sumOfCubes;
  }
  if (uniqueParamCount === 2) {
    return sum * sumOfTwoSquares;
  }
  if (uniqueParamCount === 3) return sum;
}

console.log(solution(2, 6, 1));
console.log(solution(5, 3, 3));
console.log(solution(4, 4, 4));