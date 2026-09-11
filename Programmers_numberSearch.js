function solution(num, k) {
  const numPosition = String(num).indexOf(k);
  return numPosition !== -1 ? numPosition + 1 : numPosition;
}

console.log(solution(29183, 1));
console.log(solution(232443, 4));
console.log(solution(123456, 7));
console.log(solution(0, 0));
