/** NOTE:
 * [x] 초기값 하드코딩 제거 -- for문 내, i를 k부터 시작하는게 더 단순. 루프 1회 더 돌지만 push 횟수는 같고, 유의미하지 않음.
 * [x] 제약조건 의존성 -- k가 k의 배수 시작값이 아닐수도 있기 떄문. 버그 가능성.
 * [x] 경계 표현 -- i < n + 1 보다는 i <= n 이 의도에 맞다.
 * [x] 증감식 -- i = i + k 보다는 i += k;
 * [x] 네이밍 -- arr 보다 result, multiples가 의미에 적합.
 */
function solution(n, k) {
  const multiples = [];
  for (let i = k; i <= n; i += k) {
    multiples.push(i);
  }
  return multiples;
}

console.log(solution(10, 3));
console.log(solution(15, 5));
console.log(solution(3, 5));
