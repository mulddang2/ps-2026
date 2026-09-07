/** NOTE:
 * [x] 콜백 함수 내 재할당 연산 제거하기 -- 내장 메서드 사용 시 매개변수에 할당 연산자를 사용하지 않고 순수 결괏값만 반환하도록 수정하기
 */
function solution(arr, k) {
  return arr.map((num) => (k % 2 === 0 ? num + k : num * k));
}

console.log(solution([1, 2, 3, 100, 99, 98], 3));
console.log(solution([1, 2, 3, 100, 99, 98], 2));
