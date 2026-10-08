function solution(numer1, denom1, numer2, denom2) {
  // 1. 단순 통분으로 분자 분모 계산
  const numer = numer1 * denom2 + numer2 * denom1;
  const denom = denom1 * denom2;

  // 2. 유클리드 호제법으로 최대공약수 구하기
  const getGcd = (a, b) => (b === 0 ? a : getGcd(b, a % b));
  const gcd = getGcd(numer, denom);

  // 3. 약분하여 기약분수 형태로 반환
  return [numer / gcd, denom / gcd];
}

console.log(solution(1, 2, 3, 4));
console.log(solution(9, 2, 1, 3));
console.log(solution(1, 666, 1, 333));
