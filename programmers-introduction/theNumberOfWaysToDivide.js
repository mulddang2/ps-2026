function solution(balls, share) {
  // 1. share: 선택할 개수, balls-share: 선택 안 할 개수 는 어느 쪽을 기준으로 계산하든 수학적 결과가 같기 때문에 둘 중 연산 횟수 적은 쪽으로 개선 (최대 15회)
  const r = Math.min(share, balls - share);
  let result = 1;

  // 2. 누적 곱과 나눗셈을 교대로 수행
  for (let i = 0; i < r; i++) {
    result = (result * (balls - i)) / (i + 1);
  }

  // 3. 결과값이 무조건 정수가 나와야함으로 부동소수점 오차 보정 후 정수 반환
  return Math.round(result);
}
console.log(solution(3, 2));
console.log(solution(1, 1));
console.log(solution(30, 30));
console.log(solution(5, 3));
