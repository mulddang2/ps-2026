/** NOTE:
 * [x] for문으로 풀어보기
 */
function solution(arr, divisor) {
  const answer = [];

  // 1. 나눠떨어지면 answer에 원소 추가
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % divisor === 0) answer.push(arr[i]);
  }

  // 2. 결과가 없는 경우
  if (answer.length === 0) {
    return [-1];
  }

  // 3. 오름차순 정렬
  answer.sort((a, b) => a - b);

  return answer;
}

console.log(solution([5, 9, 7, 10], 5));
console.log(solution([2, 36, 1, 3], 1));
console.log(solution([3, 2, 6], 10));
