/** NOTE:
 * [x] 조회시간 복잡도 단축 O(N) -> O(1)
 * - 기존 코드: map 루프안에서 indexOf 호출 -- O(N)
 * - sort 처리한 배열 기반으로 미리 Map 객체 생성하고 get(키전달) 하면 O(1)으로 개선가능
 */
function solution(emergency) {
  const sorted = [...emergency].sort((a, b) => b - a);
  const rankMap = new Map(sorted.map((val, index) => [val, index + 1]));

  return emergency.map((v) => rankMap.get(v));
}

console.log(solution([3, 76, 24]));
console.log(solution([1, 2, 3, 4, 5, 6, 7]));
console.log(solution([30, 10, 23, 6, 100]));
