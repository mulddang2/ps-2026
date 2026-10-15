/** NOTE:
 * [x] temp 변수 대신, answer의 마지막 원소를 직접 참조하여 코드 간결화하기
 */
function solution(arr) {
  const answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (i === 0 || answer[answer.length - 1] !== arr[i]) {
      answer.push(arr[i]);
    }
  }
  return answer;
}

console.log(solution([1, 1, 3, 3, 0, 1, 1]));
console.log(solution([4, 4, 4, 3, 3]));
