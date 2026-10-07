/** NOTE:
 * [x] replaceAll() 메서드 활용
 * [x] split(letter).join('')도 가능 -- map 연산 단계 줄일 수 있음
 */
function solution(my_string, letter) {
  return my_string.split(letter).join('');
}

console.log(solution('abcdef', 'f'));
console.log(solution('BCBdbe', 'B'));
