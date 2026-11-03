/** NOTE:
 * [x] 관리해야하는 상태변수 줄여보기
 * [x] 마지막 글자 처리 조건 정리해보기
 */
function solution(s) {
  let answer = 0;
  let current = '';
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (count === 0) {
      current = s[i];
      count = 1;
      answer++;
    } else if (current === s[i]) {
      count++;
    } else {
      count--;
    }
  }
  return answer;
}

console.log(solution('banana'));
console.log(solution('abracadabra'));
console.log(solution('aaabbaccccabba'));
