/** NOTE:
 * [x] else if (...) continue;는 죽은 코드 -- 어차피 if에서 return하지 않으면 다음 반복으로 넘어가므로 continue는 아무 효과가 없다.
 * [x] i !== arr.length는 항상 참이므로 불필요한 조건
 * [x] arr[i] === 0 불필요
 */
function solution(arr, idx) {
  return arr.indexOf(1, idx);
}
