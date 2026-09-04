/** NOTE:
 * [x] filter + join 사용해보기
 */
function solution(str_list, ex) {
  return str_list.filter((v) => !v.includes(ex)).join('');
}

console.log(solution(['abc', 'def', 'ghi'], 'ef'));
console.log(solution(['abc', 'bbc', 'cbc'], 'c'));
