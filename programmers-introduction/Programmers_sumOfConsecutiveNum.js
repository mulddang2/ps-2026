/** NOTE:
 * [x] new Array~ 부분에서 fill로 배열 전체 초기화한 뒤 map으로 새로운 배열을 다시 생성하는 구조 -> 불필요한 중간 객체 생성으로 GC 부화를 일으킴
 *
 */

function solution(num, total) {
  const start = (total - ((num - 1) * num) / 2) / num;

  const result = new Array(num);

  for (let i = 0; i < num; i++) {
    result[i] = start + i;
  }

  return result;
}

console.log(solution(3, 12));
console.log(solution(5, 15));
console.log(solution(4, 14));
console.log(solution(5, 5));
