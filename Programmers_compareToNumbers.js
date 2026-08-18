/** FIXME:
 * 1. Number(2*a*b)는 불필요합니다.
 *    - a와 b가 이미 number 이므로 이런 코드가 남아 있으면
 *      "이 값이 number가 아닐 수도 있나?" 라는 오해를 줄 수 있다.
 *
 * 2. 동점 처리 확인한 것인지 (단, a ⊕ b와 2 * a * b가 같으면 a ⊕ b를 return 합니다.)
 *    -> ex. a=3, b=6 (36,36) / a=13, b=52 (1352,1352)
 *
 * 3. 중간 변수로 의도를 드러내기
 * function solution(a, b) {
 *  const concatenated = Number(`${a}${b}`);
 *  const doubled = 2 * a * b;
 *
 *  return Math.max(concatenated, doubled);
 *
 * }
 *
 *  */
function solution(a, b) {
  return Math.max(Number(`${a}${b}`), Number(2 * a * b));
}
