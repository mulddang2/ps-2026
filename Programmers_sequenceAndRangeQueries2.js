/** NOTE:
 * [x] slice() + filter() 제거 → 단일 for 루프로 순회
 * [x] Math.min(...spread) 제거 → 루프 내 비교 또는 reduce (스택 오버플로 회피 습관)
 * [x] Infinity sentinel 사용 → length === 0 분기 제거
 * [x] answer.push 패턴 → queries.map으로 의도 명확화
 */

function solution(arr, queries) {
  return queries.map(([s, e, k]) => {
    let min = Infinity;
    for (let i = s; i <= e; i++) {
      if (arr[i] > k && arr[i] < min) min = arr[i];
    }
    return min === Infinity ? -1 : min;
  });
}

console.log(
  solution(
    [0, 1, 2, 4, 3],
    [
      [0, 4, 2],
      [0, 3, 2],
      [0, 2, 2],
    ],
  ),
);
