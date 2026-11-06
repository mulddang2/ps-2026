/** NOTE:
 * [x] 매 반복마다 stack.length를 여러번 참조하고 직접 상수 비교하는 부분을 캐싱하거나 구조 다듬어보기
 */
function solution(ingredient) {
  const stack = [];
  let count = 0;

  for (const item of ingredient) {
    stack.push(item);

    if (stack.length >= 4) {
      const len = stack.length;
      if (
        stack[len - 4] === 1 &&
        stack[len - 3] === 2 &&
        stack[len - 2] === 3 &&
        stack[len - 1] === 1
      ) {
        stack.pop();
        stack.pop();
        stack.pop();
        stack.pop();
        count++;
      }
    }
  }

  return count;
}

console.log(solution([2, 1, 1, 2, 3, 1, 2, 3, 1]));
console.log(solution([1, 3, 2, 1, 2, 1, 3, 1, 2]));
