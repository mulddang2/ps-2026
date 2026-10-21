/** NOTE:
 * [x] 중복 제거와 빠른 조회를 위해 Set 객체 활용하기
 */
function solution(numbers) {
  const sumSet = new Set();

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      sumSet.add(numbers[i] + numbers[j]);
    }
  }

  // Set을 배열로 변환 후 오름차순 정렬
  return [...sumSet].sort((a, b) => a - b);
}

console.log(solution([2, 1, 3, 4, 1]));
console.log(solution([5, 0, 2, 7]));
