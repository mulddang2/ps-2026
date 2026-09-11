/** NOTE:
 * [x] map 메서드 side Effect 패턴 수정 -- map 내부에서 외부 변수 수정이나 .push() 실행 시, 불필요한 임시배열 생성되어 메모리가 낭비됨. -> 단순 순회는 for...of 또는 기본 for 사용하기
 * [x] quizSplit 같은 2차원 임시 배열 생성 제거하고 1회 순회로 통합하기
 * [x] 단항 연산자 활용한 빠른 형변환 적용하기 -- 문자열 정수 파싱 시, +x 단항 연산자 사용하면 명시적 함수 호출 줄여 자바스크립트 엔진의 실행 속도를 높일 수 있다.
 * [x] 결과 배열 크기 사전할당으로 GC 부하 줄이기
 */

function solution(quiz) {
  const len = quiz.length;
  const result = new Array(len);

  for (let i = 0; i < len; i++) {
    const [x, op, y, , z] = quiz[i].split(' ');
    const calculated = op === '+' ? +x + +y : +x - +y;
    result[i] = calculated === +z ? 'O' : 'X';
  }

  return result;
}

console.log(solution(['3 - 4 = -3', '5 + 6 = 11']));
console.log(
  solution(['19 - 6 = 13', '5 + 66 = 71', '5 - 15 = 63', '3 - 1 = 2']),
);
