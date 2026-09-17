/** NOTE:
 * [x] 비교 함수 조건절 단축하기 -- 단락 평가 (||) 연산자 활용하기
 * [x] 조건문 내부에서 Math.abs 연산이 반복 호출되지 않도록 비교식 일원화하기
 * [x] 원본 배열 부수 효과 점검하기 -- sort() 함수가 원본 배열을 직접 변경하기 때문에, 필요 시, 원본 보존 여부 결정해야함
*/
function solution(numlist, n) {
  return numlist.sort((a, b) => Math.abs(n - a) - Math.abs(n - b) || b - a)
}

console.log(solution([1, 2, 3, 4, 5, 6], 4));
console.log(solution([10000, 20, 36, 47, 40, 6, 10, 7000], 30));
