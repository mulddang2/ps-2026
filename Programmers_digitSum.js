function solution(n) {
  const stringN = String(n).split('');

  return stringN.reduce((acc, cur) => +acc + +cur, 0);
}

console.log(solution(1234));
console.log(solution(930211));
console.log(solution(110000));
console.log(solution(500050));
