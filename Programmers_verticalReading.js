/** NOTE:
 * [x] 매 행마다 새 문자열을 만들고 한글자만 꺼내는게 불필요한 낭비 -> 인덱스 계산만으로 바로 접근 가능함.
 * [x] 루프 시작점을 c-1로 변경
 * [x] let 없애기. result를 배열에 push후 join('')
 */
function solution(my_string, m, c) {
  const result = [];
  for (let i = c - 1; i < my_string.length; i += m) {
    result.push(my_string[i]);
  }
  return result.join('');
}

console.log(solution('ihrhbakrfpndopljhygc', 4, 2));
console.log(solution('programmers', 1, 1));
