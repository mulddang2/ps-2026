/** NOTE:
 * [x] filter는 조건에 맞는 원소들을 모아 새로운 배열을 동적생성 하기 때문에, 단순히 갯수 세는 작업에서는 for문 또는 reduce 활용이 더 적합
 */
function solution(array, n) {
  return array.reduce((acc, v) => (v === n ? acc + 1 : acc), 0);
}

console.log(solution([1, 1, 2, 3, 4, 5], 1));
console.log(solution([0, 2, 3, 4], 1));
