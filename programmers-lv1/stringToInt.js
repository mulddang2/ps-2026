/** NOTE:
 * [x] slice 메서드는 불필요함. +연산자로 형변환해서 최적화하기
 */
function solution(s) {
  return +s;
}

console.log(solution('1234'));
console.log(solution('-1234'));
