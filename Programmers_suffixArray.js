/** NOTE:
 * [x] localeCompare는 불필요하다. -> '알파벳 소문자만' 이므로 기본정렬(sort())로 정확히 동작함
 * [x] 변수명이 상태와 맞지 않다.
 * [x] 역순 루프의 의도가 불분명하다. (어차피 정렬하기 때문에 삽입 순서가 의미가 없다. 정순 루프로 가독성 높이기)
 */
function solution(my_string) {
  // 선언형
  return Array.from({ length: my_string.length }, (_, i) =>
    my_string.slice(i),
  ).sort();
}

console.log(solution('banana'));
console.log(solution('programmers'));
