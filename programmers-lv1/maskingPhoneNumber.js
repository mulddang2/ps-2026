/** NOTE:
 * [x] 정규식 탐색을 통한 치환이 불필요함.
 */
function solution(phone_number) {
  return '*'.repeat(phone_number.length - 4) + phone_number.slice(-4);
}

console.log(solution('01033334444'));
console.log(solution('027778888'));
