/** NOTE:
 * [x] 단일 순회 방식으로 로직 합치기 -- map으로 새로운 배열 만든 뒤, reduce를 다시 호출하고 있어, 문자열 전체를 총 2번 순회하여 중간 배열을 추가로 생성하고 있는 문제가 있음
 * [x] 문자열 다루기 최적화하기 -- 불필요한 배열 변환 방지하기
 */

function solution(num_str) {
  return [...num_str].reduce((acc, cur) => acc + Number(cur), 0);
}

console.log(solution('123456789'));
console.log(solution('1000000'));
