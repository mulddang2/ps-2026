/** NOTE:
 * [x] resultArr[i] = score를 매번 실행하는 대신, 모든 문제 다 채점한 후 한번만 할당해서 불필요한 연산 줄이기
 * [x] 메서드 체이닝 대신 반복문과 push 사용해서 중간 배열 생성 방지하기
 */
function solution(answers) {
  const patterns = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  const scores = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === patterns[0][i % 5]) scores[0]++;
    if (answers[i] === patterns[1][i % 8]) scores[1]++;
    if (answers[i] === patterns[2][i % 10]) scores[2]++;
  }

  const maxScore = Math.max(...scores);
  const result = [];

  for (let i = 0; i < 3; i++) {
    if (scores[i] === maxScore) {
      result.push(i + 1);
    }
  }

  return result;
}

// console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([1, 3, 2, 4, 2]));
// console.log(solution([1, 3, 2, 4, 2, 2, 1, 4, 5, 4, 1, 1, 2, 1]));
