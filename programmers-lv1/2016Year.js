function solution(a, b) {
  const month = {
    1: 31,
    2: 29,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31,
  };
  const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  // OFFSET: 1월 1일 금요일이 0번 idx로 부터 밀린 수(0+5)
  const OFFSET = 5;

  let total = 0;
  for (let i = 1; i < a; i++) {
    total += month[i];
  }

  // 1월 1일을 기준점(0일째 지남), 지나간 날짜 수 계산
  total = total + b - 1;

  // 1월 1일 부터 얼마나 밀렸는지: 1주일은 7일 이므로, 구한 일수를 7로 나눈 나머지
  return days[(total + OFFSET) % 7];
}

console.log(solution(5, 24));
