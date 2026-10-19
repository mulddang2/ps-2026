/** NOTE:
 * [x] 문자열 누적(+=는 문자열을 매번 새로 생성 해서 매모리 효율 떨어짐) 대신 배열 메서드(push 및 join) 활용해서 메모리 효율 높이기
 */
function solution(s) {
  let result = [];
  let idx = 0;

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (char === ' ') {
      result.push(' ');
      idx = 0;
    } else {
      result.push(idx % 2 === 0 ? char.toUpperCase() : char.toLowerCase());
      idx++;
    }
  }
  return result.join('');
}

console.log(solution('try hello world'));
console.log(solution('tryy Ehello world'));
