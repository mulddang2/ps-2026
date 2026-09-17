/** NOTE:
 * - array.toString()은 배열 내 모든 숫자와 구분자가 포함된 대형 문자열을 힙 메모리에 새로 생성해서 데이터 크기가 커짐
 * [x] 문자열 변환 대신 수학적 산술 연산 적용하기
 */
function solution(array) {
  let count = 0;

  for (let i = 0; i < array.length; i++) {
    let num = array[i];
    while (num > 0) {
      if (num % 10 === 7) count++;
      num = Math.floor(num / 10);
    }
  }
  return count;
}

console.log(solution([7, 77, 17]));
console.log(solution(10, 29));
