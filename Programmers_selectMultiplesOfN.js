/** NOTE:
 * [x] filter 콜백 함수 내에서 원소 자체 대신 명시적 불리언 조건문(v % n === 0) 반환하기(filter는 true,false 타입으로 추론하기 떄문) -- 암묵적 타입 변환 방지
 */
function solution(n, numlist) {
  return numlist.filter((v) => v % n === 0);
}

console.log(solution(3, [4, 5, 6, 7, 8, 9, 10, 11, 12]));
console.log(solution(5, [1, 9, 3, 10, 13, 5]));
console.log(solution(12, [2, 100, 120, 600, 12, 12]));
