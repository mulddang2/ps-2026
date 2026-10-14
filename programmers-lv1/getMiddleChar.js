/** NOTE:
 * [x] s.length 중복 참조 삭제
 * [x] 홀수 처리 시, Math.floor(len / 2) 로 변경
 * [x] 변수 할당 및 메모리 최소화 -- mid 변수하나로 홀수짝수 인덱스 모두 커버 가능
 */
function solution(s) {
  let mid = Math.floor(s.length / 2);
  return s.length % 2 === 0 ? s.slice(mid - 1, mid + 1) : s[mid];
}

console.log(solution('abcde'));
console.log(solution('qwer'));
