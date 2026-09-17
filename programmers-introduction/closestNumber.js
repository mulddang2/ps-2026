/** NOTE:
 * [x] 동일 차이 발생 시, 반환 우선 순위 조건 확인하기
 * [x] map 및 indexOf 고차 함수 체이닝에 따른 메모리 오버헤드 줄이기
 * [x] 다중 배열 순회를 1회의 단일 순회로 최적화하기
 */
function solution(array, n) {
  let closet = array[0];
  let minDiff = Math.abs(n - array[0]);

  for (let i = 1; i < array.length; i++) {
    const diff = Math.abs(n - array[i]);
    // 더 가까운 값 발견 시 갱신
    if (diff < minDiff) {
      minDiff = diff;
      closet = array[i];
    }
    // 차이가 같을 경우, 더 작은 수 선택
    if (diff === minDiff && array[i] < closet) {
      closet = array[i];
    }
  }
  return closet;
}

console.log(solution([14, 10], 12));
console.log(solution([4, 6, 4, 4], 7));
console.log(solution([10, 11, 12], 13));
