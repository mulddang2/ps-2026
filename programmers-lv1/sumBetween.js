/** NOTE:
 * [x] 반복문 도는 것보다 등차수열의 합 이용해보기
 */
function solution(a, b) {
  const min = Math.min(a, b);
  const max = Math.max(a, b);
  const count = max - min + 1;

  // 가우스의 등차수열 합 공식 : (항의 개수 * (첫 항 + 끝 항)) / 2
  return (count * (min + max)) / 2;
}

console.log(solution(3, 5));
console.log(solution(3, 3));
console.log(solution(5, 3));
