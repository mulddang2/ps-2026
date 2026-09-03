/** NOTE:
 * [x] Number(a) + Number(b) 오차 발생 이유 -- js에서 Number의 안전 한계 '약 16'자리까지 인데, 해당 문제의 입력 크기는 최대 '10만'자리까지여서 오차발생
 */
function solution(a, b) {
  return (BigInt(a) + BigInt(b)).toString();
}

console.log(solution('582', '734'));
console.log(solution('18446744073709551615', '287346502836570928366'));
console.log(solution('0', '0'));
