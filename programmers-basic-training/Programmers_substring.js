/** NOTE:
 * [x] 불리언값을 숫자로 변환하는 형태로 간결하게 작성해보기
 */
function solution(str1, str2) {
  return Number(str2.includes(str1));
}

console.log(solution('abc', 'aabcc'));
console.log(solution('tbt', 'tbbttb'));
