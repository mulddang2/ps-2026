/** FIXME:
 * [x] 객체 키 표기 통일
 * [x] DELTA 변수명 명확하게 수정
 * [x] 루프 인덱스 기준을 문제 설명과 맞추기
 * [x] 미정의 키 처리 - 다른 값 들어오면 undefined가 문자열에 그대로 붙음
 */

const DELTA_TO_KEY = {
  '1': 'w',
  '-1': 's',
  '10': 'd',
  '-10': 'a',
};

function solution(numLog) {
  let control = '';
  for (let i = 1; i < numLog.length; i++) {
    control += DELTA_TO_KEY[numLog[i] - numLog[i - 1]];
  }
  return control;
}
