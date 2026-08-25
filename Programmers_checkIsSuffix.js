/** NOTE:
 * [x] 불필요한 배열 생성 제거: 모든 접미사를 만들어놓고 하나만 비교한다. 판별만 필요하므로 배열이 불필요함.
 *
 * [x] 미사용 인자 정리
 * [x] 엣지 케이스 점검(ex. my_string === is_suffix, is_suffix가 더 긴경우)
 */

// [x] 표준 API 사용 (String.prototype.endsWith)
function solution1(my_string, is_suffix) {
  return my_string.endsWith(is_suffix) ? 1 : 0;
}

// [x] API 없이 푼다면 slice 한번으로 충분 (slice(-0)은 전체 문자열 반환함)
function solution2(my_string, is_suffix) {
  return my_string.slice(-is_suffix.length) === is_suffix ? 1 : 0;
}

console.log(solution1('banana', 'abanana'));
console.log(solution2('banana', 'abanana'));
