/** NOTE:
 * [x] 조건 분기 중복 제거하기 -- if-else문 안에서 map을 두번 호출하는 대신, map 내부에서 인덱스 조건만 동적으로 판별하도록 구조 개편하기
 * [x] 변수명을 통한 의도 명확히 드러내기 -- isOdd가 "배열 길이의 홀수 여부" 임을 직관적으로 알 수 있도록 변수명 수정
 * [x] 인덱스 조건식 간소화하기
 */

function solution(arr, n) {
  const isLengthOdd = arr.length % 2 !== 0;

  return arr.map((v, i) => {
    const shouldAdd = isLengthOdd ? i % 2 === 0 : i % 2 !== 0;
    return shouldAdd ? v + n : v;
  });
}

console.log(solution([49, 12, 100, 276, 33], 27));
console.log(solution([444, 555, 666, 777], 100));
