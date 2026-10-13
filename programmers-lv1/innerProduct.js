/** NOTE:
 * [x] 코테환경에서는 전통적인 for루프방식이 효율적
 */
function solution(a, b) {
  // return a.reduce((acc, cur, i) => acc + cur * b[i], 0);

  let answer = 0;
  for (let i = 0; i < a.length; i++) {
    answer += a[i] * b[i];
  }
  return answer;
}

console.log(solution([1, 2, 3, 4], [-3, -1, 0, 2]));
console.log(solution([-1, 0, 1], [1, 0, -1]));
