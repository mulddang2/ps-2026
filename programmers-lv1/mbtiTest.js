/** NOTE:
 *  [x] Math.abs 메서드 삭제
 *  [x] 구조분해 할당 패턴 활용, 가독성 개선
 */
function solution(survey, choices) {
  // 1. 성격 유형별 점수판 초기화
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

  // 2. survey 순회하며 점수 누적
  for (let i = 0; i < survey.length; i++) {
    const [disagreeType, agreeType] = survey[i];
    const choice = choices[i];

    if (choice < 4) {
      scores[disagreeType] += 4 - choice;
    } else if (choice < 4) {
      scores[agreeType] += choice - 4;
    }
    // choice === 4 인 경우는 0점이므로 무시
  }

  // 3. 지표별로 더 높은 점수를 가진 유형 선택 (동점 시 사전 순)
  const indicators = [
    ['R', 'T'],
    ['C', 'F'],
    ['J', 'M'],
    ['A', 'N'],
  ];

  let result = '';

  for (const [type1, type2] of indicators) {
    if (scores[type1] >= scores[type2]) {
      result += type1;
    } else {
      result += type2;
    }
  }

  return result;
}

console.log(solution(['AN', 'CF', 'MJ', 'RT', 'NA'], [5, 3, 2, 7, 5]));
console.log(solution(['TR', 'RT', 'TR'], [7, 1, 3]));
