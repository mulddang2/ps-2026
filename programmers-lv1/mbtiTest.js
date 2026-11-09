function solution(survey, choices) {
  // 1. 지표와 점수를 담을 공간 (각 성격 유형을 key로 삼아 점수를 관리)
  // 8개 점수 모인 뒤에, 1번 지표 부터 4번 지표까지 비교해서 결과 뽑기
  const scores = {
    R: 0,
    T: 0,
    C: 0,
    F: 0,
    J: 0,
    M: 0,
    A: 0,
    N: 0,
  };
  // console.log(survey[0][0])

  // 2. survey 순회와 인덱스 접근
  // 어떤 알파벳이, 몇점을 가져가는가
  for (let i = 0; i < survey.length; i++) {
    const choice = choices[i];

    if (choice > 4) {
      // 5, 6, 6일 때, 뒤에 문자 선택
      scores[survey[i][1]] += Math.abs(choice - 4);
    } else if (choice < 4) {
      scores[survey[i][0]] += Math.abs(choice - 4);
    }
  }
  // 점수 크기 계산 (choices의 1, 2, 3점 처리 -- 4를 기준으로 선택지 값과의 거리 이용해서 점수 구하기)

  // 최종 결과 비교 및 동점 처리 -- 점수 집계 끝난 후, 두 유형 (ex. R,T) 점수 비교해 더 높은 쪽 선택 -- 점수가 같을 경우 사전 순으로 빠른 것 선택

  const indicators = [
    ['R', 'T'],
    ['C', 'F'],
    ['J', 'M'],
    ['A', 'N'],
  ];

  let result = '';

  for (let i = 0; i < indicators.length; i++) {
    const char1 = indicators[i][0];
    const char2 = indicators[i][1];
    result += scores[char1] >= scores[char2] ? char1 : char2;
  }

  return result;
}

console.log(solution(['AN', 'CF', 'MJ', 'RT', 'NA'], [5, 3, 2, 7, 5]));
console.log(solution(['TR', 'RT', 'TR'], [7, 1, 3]));
