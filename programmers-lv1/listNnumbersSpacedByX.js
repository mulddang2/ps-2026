/** NOTE:
 * [x] 일반 for문이 더 빠르기 때문에 for문 사용해보기
 */
function solution(x, n) {
  const answer = new Array(n);

  for (let i = 0; i < n; i++) {
    answer[i] = x * (i + 1);
  }
  return answer;
}

console.log(solution(2, 5));
console.log(solution(4, 3));
console.log(solution(-4, 2));
