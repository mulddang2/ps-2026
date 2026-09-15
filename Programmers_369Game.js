/** NOTE:
 * [x] 수학적 연산 활용 -- 힙 메모리 할당 제로, 메모리 초과 위험으로부터 안전함
 */

function solution(order) {
  let count = 0;
  let num = order;

  while (num > 0) {
    const digit = num % 10;
    if (digit === 3 || digit === 6 || digit === 9) {
      count++;
    }
    num = Math.floor(num / 10);
  }
  return count;
}

console.log(solution(3));
console.log(solution(29423));
