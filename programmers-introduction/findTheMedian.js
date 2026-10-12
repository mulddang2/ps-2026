/** NOTE:
 * [x] 코딩테스트 체점 환경에서는 입력받은 파라미터를 그대로 수정해도 문제가 없는 경우가 대부분이므로 불필요한 연산과 메모리 할당 줄이는 것이 유리함.
 */
function solution(array) {
  return array.sort((a, b) => a - b)[Math.floor(array.length / 2)];
}

console.log(solution([1, 2, 7, 10, 11]));
console.log(solution([9, -1, 0]));
