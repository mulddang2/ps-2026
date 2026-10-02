/** NOTE:
 * 1. 합성수는 1과 자기 자신을 제외한 약수가 최소 1개만 더 존재하면 성립한다. -- 2부터 i - 1 사이에 나눠떨어지는 수가 나오는 순간 탐색을 즉시 중단하기
 */
function solution(n) {
  let count = 0;

  for (let i = 4; i <= n; i++) {
    // 1과 자기자신은 무조건 약수이기 때문에 반복에서 제외하기
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        count++;
        break;
      }
    }
  }
  return count;
}

console.log(solution(10));
console.log(solution(15));
