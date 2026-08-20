/** FIXME:
 * [x] if 4개 -> DELTA 매핑 객체 (불필요한 비교 제거 + 규칙을 데이터로 분리)
 *    - 현재는 "w"가 매칭돼도 나머지 3개 비교를 전부 수행한다.
 */

const DELTA = { w: 1, s: -1, d: 10, a: -10 };

function solution(n, control) {
  for (const char of control) n += DELTA[char];
  return n;
}
