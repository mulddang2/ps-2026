/** NOTE:
 * [x]  .split('') → [...str] 스프레드로 교체
 */
function solution(my_string, s, e) {
  const reversed = [...my_string.slice(s, e + 1)].reverse().join('');
  return my_string.slice(0, s) + reversed + my_string.slice(e + 1);
}

console.log(solution('Progra21Sremm3', 6, 12));
console.log(solution('Stanley1yelnatS', 4, 10, 'Stanley1yelnatS'));