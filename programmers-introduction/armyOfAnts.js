/** NOTE:
 * [x] third 변수 계산할 때, 이전계산의 몫(second)가 아닌, '남은 체력(hp % 5)'를 기준으로 나머지 연산 수행하도록 수정
 * [x] hp = 7, hp = 12같이 5로 나눈 나머지가 2 이상인 경계값을 직접 대입하여 검증하기
 */
function solution(hp) {
  return (
    Math.floor(hp / 5) + Math.floor((hp % 5) / 3) + Math.floor((hp % 5) % 3)
  );
}
console.log(solution(23));
console.log(solution(24));
console.log(solution(999));
console.log(solution(12));
console.log(solution(7));
