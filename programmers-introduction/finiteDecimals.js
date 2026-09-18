function getGcd(a, b) {
  return b === 0 ? a : getGcd(b, a % b);
}

function solution(a, b) {
  // 1. 최대공약수(GCD) 함수 작성하기, 분자와 분모 약분하여 기약분수로 만들기
  const gcd = getGcd(a, b);
  let denominator = b / gcd;
  // 2. while 문으로 소인수 2와 5 제거하기
  while (denominator % 2 === 0) {
    denominator /= 2;
  }

  while (denominator % 5 === 0) {
    denominator /= 5;
  }
  // 3. 남은 분모 값으로 유한소수 판별하기
  return denominator === 1 ? 1 : 2;
}

console.log(solution(7, 20));
console.log(solution(11, 22));
console.log(solution(12, 21));
