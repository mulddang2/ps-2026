/** NOTE:
 * [x] 단일 순회 최대값 2개 추적 방식으로 개선해보기
 */
function solution(numbers) {
  let max1 = 0;
  let max2 = 0;

  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    if (num > max1) {
      max2 = max1;
      max1 = num;
    } else if (num > max2) {
      max2 = num;
    }
  }
}

console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([0, 31, 24, 10, 1, 9]));
