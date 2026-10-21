/** NOTE:
 * [x] 고차함수 미사용 버전으로 풀어보기
 */
function solution(array, commands) {
  const answer = [];
  for (let i = 0; i < commands.length; i++) {
    const [start, end, k] = commands[i];

    const slicedSorted = array.slice(start - 1, end).sort((a, b) => a - b);

    answer.push(slicedSorted[k - 1]);
  }
  return answer;
}

console.log(
  solution(
    [1, 5, 2, 6, 3, 7, 4],
    [
      [2, 5, 3],
      [4, 4, 1],
      [1, 7, 3],
    ],
  ),
);
