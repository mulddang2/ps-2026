/** NOTE:
 * [x] numArr에 0이 빠져있음
 * [x] reduce 활용해보기
 */
function solution(numbers) {
  // 1. reduce 활용
  // const total = 45;
  // const currentSum = numbers.reduce((acc, cur) => acc + cur, 0);
  // return total - currentSum;

  // 2. 직접 순회
  let sum = 0;
  for (let i = 0; i <= 9; i++) {
    if (!numbers.includes(i)) {
      sum += i;
    }
  }
  return sum;
}

console.log(solution([1, 2, 3, 4, 6, 7, 8, 0]));
console.log(solution([5, 8, 4, 0, 6, 7, 9]));
