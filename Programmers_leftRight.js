/** NOTE:
 * [x] let -> const 사용 (조기 return 으로 변경 시, 변수 불필요)
 * [x] break + 재할당 -> 즉시 return
 * [] findIndex로 변경해보기
 */

function solution(str_list) {
  // 기존코드 수정
  // for (let i = 0; i < str_list.length; i++) {
  //   if (str_list[i] === 'l') {
  //     return str_list.slice(0, i);
  //   } else if (str_list[i] === 'r') {
  //     return str_list.slice(i + 1);
  //   }
  // }
  // return [];

  // findIndex 적용:
  /** NOTE: findIndex 특징
   * 1. 조건을 만족하는 순간 멈춘다. -- 모두 도는 filter, map과 다르게 동작
   * 2. 값이 아니라 인덱스를 준다.
   * 3. 없으면 -1
   *  */

  const pivotIndex = str_list.findIndex((s) => s === 'l' || s === 'r');

  if (pivotIndex === -1) return [];

  return str_list[pivotIndex] === 'l'
    ? str_list.slice(0, pivotIndex)
    : str_list.slice(pivotIndex + 1);
}

console.log(solution(['u', 'u', 'l', 'r']));
console.log(solution(['d', 'r']));
