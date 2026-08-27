/** NOTE:
 * [x]  변수명 — left/right는 위치를 뜻하는데 결과에서는 순서가 뒤집힙니다. 굳이 변수를 남긴다면 head/tail 또는 front/back이 의미가 더 적합
 * [x] 스프레드 대신 concat 고려 — 길이 30짜리 문제라 차이는 없지만, 배열을 이어붙이는 의도가 더 직접적으로 드러납니다:
 * [x] 불필요한 중간 변수 — left/right를 한 번씩만 쓰므로 인라인 가능:
 */
function solution(num_list, n) {
  return num_list.slice(n).concat(num_list.slice(0, n));
}
