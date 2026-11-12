/** NOTE:
 * [x] 날짜 문자열을 일수로 변환하는 로직 분리
 * [x] 일반 객체 대신, Map 객체 활용
 */
function solution(today, terms, privacies) {
  // today, privacies에서 날짜 부분을 총 일수로 변환
  // privacies에서 알파벳 부분과 동일한 terms의 숫자 만큼 일수 더하기
  // today보다 작으면 result에 privacies[i] + 1 담기
  // terms는 개월 수 이기 때문에 개월수 * 28 하기

  // 1. 날짜 문자열을 총 일수로 환산하는 헬퍼 함수 (모든 달 28일 가정)
  const parseDays = (dateStr) => {
    const [y, m, d] = dateStr.split('.').map(Number);
    return y * 336 + m * 28 + d;
  };

  // 2. terms 배열을 Map 객체로 변환
  const termMap = new Map(
    terms.map((term) => {
      const [type, months] = term.split(' ');
      return [type, Number(months) * 28];
    }),
  );

  const todayTotalDays = parseDays(today);

  // 3. privacies 배열을 순회하며 파기 대상 번호 추출
  return privacies.reduce((acc, privacy, idx) => {
    const [dateStr, type] = privacy.split(' ');

    // 수집일 총 일 수 + 약관 유효 일수 - 1 (당일까지 보관가능)
    const expiryDays = parseDays(dateStr) + termMap.get(type) - 1;

    if (todayTotalDays > expiryDays) {
      acc.push(idx + 1);
    }
    return acc;
  }, []);
}

console.log(
  solution(
    '2022.05.19',
    ['A 6', 'B 12', 'C 3'],
    ['2021.05.02 A', '2021.07.01 B', '2022.02.19 C', '2022.02.20 C'],
  ),
);
console.log(
  solution(
    '2020.01.01',
    ['Z 3', 'D 5'],
    [
      '2019.01.01 D',
      '2019.11.15 Z',
      '2019.08.02 D',
      '2019.07.01 D',
      '2018.12.28 Z',
    ],
  ),
);
