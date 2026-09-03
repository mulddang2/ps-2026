/** NOTE:
 * 1. 자료구조 최적화 검토
 *  [x] 문자열 길이가 최대 30으로 제한된 점 확인하기
 *  [x] 동적 객체({}) 대신 고정 크기 배열(new Int32Array(31))로 변경하여 메모리 및 해시조회 오버헤드 줄이기
 * 2. 변수 선언 및 키워드 점검하기
 *  [x] 루프 내부에서 재할당되지 않는 len 변수의 키워드를 let에서 const로 수정하기
 *  [x] 빈도수를 저장하는 변수명을 복수형(counts 또는 lengthCounts)으로 변경해 의도 명확히 하기
 */

function solution(strArr) {
  const counts = new Int32Array(31);
  let maxValue = 0;

  for (const str of strArr) {
    const len = str.length;
    counts[len]++;

    if (counts[len] > maxValue) {
      maxValue = counts[len];
    }
  }
  return maxValue;
}

console.log(solution(['a', 'bc', 'd', 'efg', 'hi']));
