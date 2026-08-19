/** FIXME:
 * [x] 1. 배열이 불필요
 * - 값을 모아뒀다가 마지막에 한번더 순회하는데, 답은 합만 필요하다.
 *
 * [x] 2. reduce에 초기값이 없다.
 * 여기서는 n>= 1 이라 배열이 절대 비지 않아 통과하지만, 합계 reduce에는 ,0을 붙이는 습관이 좋다.(빈배열일 때, 초기값이 없으면 acc로 삼을 요소가 없어서 TypeError)
 *
 * [x] 3. 두 분기가 사실상 같은 구조이기 때문에 하나로 합치기도 가능
 * [x] 4. odd, even 처럼 재할당하지 않는 변수는 let 보다 const가 적절함
 *  - 배열 재할당은 주소변경이기 때문에, 주소 변경하지 않는다면 const 사용가능
 *
 */
function solution(n) {
  const isOdd = n % 2 === 1;
  let answer = 0;

  for (let i = n; i > 0; i -= 2) {
    answer += isOdd ? i : i * i;
  }
  return answer;
}

console.log(solution(7));
console.log(solution(10));
