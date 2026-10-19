function solution(n) {
  // 1. 3진법 문자열로 변환 후 앞뒤 반전
  const reversedBase3 = n.toString(3).split('').reverse().join('');

  // 2. 10진법 숫자로 변환하여 반환
  return parseInt(reversedBase3, 3);
}

console.log(solution(45));
console.log(solution(125));
// console.log(solution(100000000));
