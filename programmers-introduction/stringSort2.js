/** NOTE:
 * [x] 루프 내부에서 개별 소문자 변환 제거 --> my_string.toLowerCase()로 1회만 호출
 * [x]  문자열 덧셈 연산의 누적 삭제
 */
function solution(my_string) {
  return [...my_string.toLowerCase()].sort().join('');
}

console.log(solution('Bcad'));
console.log(solution('heLLo'));
console.log(solution('Python'));
