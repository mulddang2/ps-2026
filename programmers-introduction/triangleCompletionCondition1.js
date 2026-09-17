/** NOTE:
 * [x] 초기화 및 루프 분기 오류 --> i = 0 일 때, sides[0] > sides[0] 조건이 false 여서 else로 넘어감 (ex. [3, 2, 1] 케이스 실패함)
 *[x] sort 활용하기
 */
function solution(sides) {
  sides.sort((a, b) => a - b);
  return sides[2] < sides[0] + sides[1] ? 1 : 2;
}

console.log(solution([3, 2, 1]));
console.log(solution([5, 5, 5]));
console.log(solution([3, 6, 2]));
console.log(solution([222, 72, 111]));
