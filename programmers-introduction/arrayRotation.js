/** NOTE:
 * [x] 원본 배열 보존하면서 불변성 유지해도록 개선하기
 */
function solution(numbers, direction) {
  return direction === 'right'
    ? [numbers[numbers.length - 1], ...numbers.slice(0, -1)]
    : [...numbers.slice(1), numbers[0]];
}

console.log(solution([1, 2, 3], 'right'));
console.log(solution([4, 455, 6, 4, -1, 45, 6], 'left'));
