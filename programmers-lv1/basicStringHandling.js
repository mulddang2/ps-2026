/** NOTE:
 * [x] Number() 함수안에 공백이나 빈 문자열 들어올 경우 0이 나오기 때문에 NaN에 안걸리는 문제 발생
 * [x] 문자열 길이 조건 누락!!
 */
function solution(s) {
  // 정규식풀이
  // return (s.length === 4 || s.length === 6) && /^\d+$/.test(s);

  if (s.length !== 4 && s.length !== 6) return false;
  return [...s].every((c) => c >= '0' && c <= '9');
}

console.log(solution('a234'));
console.log(solution('023499'));
console.log(solution('Zza1234'));
