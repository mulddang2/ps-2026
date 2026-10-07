/** NOTE:
 * [x] else if (angle > 90 && angle < 180) 에서 불필요한 연산 존재 -- 앞에서 리턴 안됐으면 angle > 90 검사는 생략 가능
 * [x] return 이후 실행되는 else 키워드는 불필요하므로 제거하기
 */

function solution(angle) {
  if (angle < 90) return 1;
  if (angle === 90) return 2;
  if (angle < 180) return 3;
  return 4;
}

console.log(solution(70));
console.log(solution(91));
console.log(solution(180));
