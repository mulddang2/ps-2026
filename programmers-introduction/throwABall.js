/** NOTE:
 * 전체 이동량에 % numbers.length
 */
function solution(numbers, k) {
  let currentIdx = 0;
  for (let i = 0; i < k - 1; i++) {
    currentIdx = (currentIdx + 2) % numbers.length;
  }
  return numbers[currentIdx];
}

console.log(solution([1, 2, 3, 4], 2));
console.log(solution([1, 2, 3, 4, 5, 6], 5));
console.log(solution([1, 2, 3], 3));
