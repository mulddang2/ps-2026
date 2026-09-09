/** NOTE:
 * [x] 최대 차원 수 사전 계산하기 -- Math.max(row, col)을 통해 최종 정사각형의 크기를 미리 구하고, 루프 조건식에서 반복되는 산술 연산(row - col)을 최소화하기
 * [x] 고정 크기 배열 미리 할당하기 -- 동적 재할당 메모리 오버헤드 차단하기(push활용한 가변확장 대신 목표 크기만큼 0으로 채워진 공간을 먼저 선언하여 메모리 재할당 및 가비지 컬렉션 부담 줄이기)
 * [x] 원본 배열 불변성 유지하기 -- 입력 매개변수를 직접 수정하기보다 새 배열에 결과를 담아 반환하기
 */

function solution(arr) {
  const row = arr.length;
  const col = arr[0].length;
  const size = Math.max(row, col);

  // 1. 최종 크기(size x size)에 맞게 0으로 채워진 결과 배열을 미리 생성 (메모리 재할당 방지)
  const result = Array.from({ length: size }, () => new Array(size).fill(0));

  // 2. 원본 데이터 복사 (범위 벗어난 공간은 0 유지)
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      result[i][j] = arr[i][j];
    }
  }

  return result;
}

console.log(
  solution([
    [572, 22, 37],
    [287, 726, 384],
    [85, 137, 292],
    [487, 13, 876],
  ]),
);
console.log(
  solution([
    [57, 192, 534, 2],
    [9, 345, 192, 999],
  ]),
);
console.log(
  solution([
    [1, 2],
    [3, 4],
  ]),
);
