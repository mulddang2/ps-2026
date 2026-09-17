/** NOTE:
 * [x] 불필요한 메모리 할당 최소화 -- concat메서드는 이미 새 배열을 생성해서 반환하기 때문에 불필요한 배열 생성 연산이 1회 더 추가 되어 있는 [...arr] 삭제
 *
 */
function solution(arr) {
  let targetLength = 1;

  // 목표 2의 거듭제곱 길이 찾기
  while (targetLength < arr.length) {
    targetLength *= 2;
  }
  return arr.concat(Array(targetLength - arr.length).fill(0));
}

console.log(solution([1, 2, 3, 4, 5, 6]));
console.log(solution([58, 172, 746, 89]));
