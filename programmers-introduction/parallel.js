/** NOTE:
 * [x] 인덱스 직접 접근 대신 의미 있는 병수명 사용하기 -- 구조분해할당 사용
 * [x] 두 직선의 평행 여부를 대각선 곱으로 판별
 * [x] 반복 연산식 헬퍼 함수로 추상화하기 -- 인덱스 오타방지
 *
 */
function solution(dots) {
  // 1. 배열의 각 점을 A, B, C, D로 둔다.
  const [A, B, C, D] = dots;

  // 2. 두 직선 (p1-p2), (p3-p4)의 평행 여부를 대각선 곱으로 판별
  const isParallel = (p1, p2, p3, p4) =>
    (p2[1] - p1[1]) * (p4[0] - p3[0]) === (p4[1] - p3[1]) * (p2[0] - p1[0]);

  // 3. 가능한 3가지 직성 쌍 조합 검사
  if (isParallel(A, B, C, D)) return 1;
  if (isParallel(A, C, B, D)) return 1;
  if (isParallel(B, C, A, D)) return 1;

  return 0;
}

console.log(
  solution([
    [1, 4],
    [9, 2],
    [3, 8],
    [11, 6],
  ]),
);
console.log(
  solution([
    [3, 5],
    [4, 1],
    [2, 4],
    [5, 10],
  ]),
);
