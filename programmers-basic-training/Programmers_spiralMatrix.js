/** NOTE:
 * [x] 2차원 배열 초기화 구조 최적화하기 -- 화살표 함수 콜백을 수반하는 Array.from 방식 대신 고전 for 루프 활용
 * [x] 4개 경계 포인터 제어 방식 적용하기 -- 상하좌우 경계 변수 선언하고, 조건문 기반 탐색 대신 순차적 루프 수행으로 시간복잡도 단축하기
 * [x] 경계조건 예외 계이스 검증하기 -- n=1과 같은 최소 입력 단위에서 루프 정상 종류 여부 확인하기
 */

function solution(n) {
  // 1. 단순 반복문을 통한 최적의 2차원 배열 할당
  const result = new Array(n);
  for (let i = 0; i < n; i++) {
    result[i] = new Array(n);
  }

  let num = 1;
  let top = 0,
    bottom = n - 1;
  let left = 0,
    right = n - 1;

  // 2. 경계를 줄여가며 조건 분기 없이 직관적으로 값 채우기
  while (top <= bottom && left <= right) {
    // 좌 -> 우
    for (let col = left; col <= right; col++) result[top][col] = num++;
    top++;

    // 상 -> 하
    for (let row = top; row <= bottom; row++) result[row][right] = num++;
    right--;

    // 우 -> 좌
    if (top <= bottom) {
      for (let col = right; col >= left; col--) result[bottom][col] = num++;
      bottom--;
    }

    // 하 -> 상
    if (left <= right) {
      for (let row = bottom; row >= top; row--) result[row][left] = num++;
      left++;
    }
  }

  return result;
}

console.log(solution(4));
console.log(solution(5));
console.log(solution(1));
