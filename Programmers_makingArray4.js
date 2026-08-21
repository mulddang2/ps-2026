/** NOTE:
 * [x] else if (stk.at(-1) >= arr[i]) → else
 * [x] 첫 두 분기 병합
 * [x] while + 수동 i -> for...of
 * [x] stk.at(-1) vs stk[stk.length - 1]: 매 반복 호출 시 인덱싱보다 느림
 * [x] let stk -> const stk: 재할당하지 않고 push/pop만 하므로 const가 의도를 더 정확히 드러냄
 */

function solution(arr) {
  const stk = [];

  for (const num of arr) {
    while (stk.length > 0 && stk[stk.length - 1] >= num) {
      stk.pop();
    }
    stk.push(num)
  }
  return stk;
}

console.log(solution([1, 4, 2, 5, 3]))