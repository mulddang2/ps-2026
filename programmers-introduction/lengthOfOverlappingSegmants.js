/** NOTE:
 * 1. 루프 내부 메모리 할당 최소화하기
 * [x] 구조분해할당 배열 생성 제거하고, 변수에 직접 접근하기
 * [x] 루프 내, 불필요한 객체 할당 줄여 가비지 컬렉션 부하 방지하기
 *
 * 2. 반복문 제어 구조 개선
 * [x] forEach 대신 for문 사용하기
 * [x] 콜백 함수 생성 스택 오버헤드 최소화
 *
 * 3. 타입 배열 도입하기
 * [x] 카운터 용도의 일반 배열을 Int8Array 타입 배열로 변경하기
 * [x] 연속된 메모리 공간을 확보하여 빠른 메모리 연산 유도하기
 *
 * 4. 경계 조건 및 상수 관리하기
 * [x] 100, 200 등 매직 넘버를 의미있는 상수로 정의하기
 * [x] 최소/최대 좌표값 입력 시, 엣지 케이스 동작 검증하기
 */

function solution(lines) {
  // 1. 배열 안에 데이터가 숫자 3개 뿐이기 때문에, 저장값이 100 이하면 Int8Array 사용
  const OFFSET = 100;
  let overlapLength = 0;
  const SIZE = 200;
  const lineMap = new Int8Array(SIZE);
  // 2. 각 선분 [start, end]에 대해, 선분이 지나는 1 단위 길이 구간에 해당하는 배열칸의 값을 +1씩 증가시킨다.

  for (let i = 0; i < lines.length; i++) {
    const start = lines[i][0];
    const end = lines[i][1];

    for (let j = start; j < end; j++) {
      lineMap[j + OFFSET]++;
    }
  }
  // 3. 모든 선분 처리 후, 배열에서 값이 2 이상인 칸의 개수를 세어 리턴
  for (let i = 0; i < SIZE; i++) {
    if (lineMap[i] >= 2) {
      overlapLength++;
    }
  }
  return overlapLength;
}

console.log(
  solution([
    [0, 1],
    [2, 5],
    [3, 9],
  ]),
);
console.log(
  solution([
    [-1, 1],
    [1, 3],
    [3, 9],
  ]),
);
console.log(
  solution([
    [0, 5],
    [3, 9],
    [1, 10],
  ]),
);
