/** NOTE:
 * [x] 불필요한 변수 선언 줄이기
 */
function solution(my_string) {
  return [...new Set(my_string)].join('');
}

console.log(solution('people'));
console.log(solution('We are world'));
