/** NOTE:
 * [x] for...of와 인덱스 산술 연산 활용
 */
function solution(num_list) {
  const answer = [0, 0];

  for (const num of num_list) {
    answer[num % 2]++;
  }
  return answer;
}

console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([1, 3, 5, 7]));
